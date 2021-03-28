import '../style/ResultRow.css'

const ResultRow = ({rank,option,estimatedreturn}) => {

	var strArray = option.description.split(" ")
	if(!strArray[4].includes(".")) {
		strArray[4] += ".00";
	}
	var subStrIdx = strArray[4].indexOf(".")
	if(strArray[4].substring(subStrIdx).length < 3) {
		strArray[4] += "0"
	}
	//console.log(strArray[6])
	// if(strArray[6].substring(0, 1) == "(") {
	// 	strArray[5] += strArray[6];
	// 	strArray[6] = strArray[7];
	// }
    return (
        <div class='row'>
            {/*
            <table>
                
                
                <colgroup>
                    <col span="1" style="width: 10%;" />
                    <col span="1" style="width: 10%;"/>
                    <col span="1" style="width: 10%;"/>
                    <col span="1" style="width: 10%;"/>
                    <col span="1" style="width: 10%;"/>
                    <col span="1" style="width: 10%;"/>
                    <col span="1" style="width: 10%;"/>
    </colgroup>
                <tbody>
                    <tr>
                        <td>{strArray[0]}</td>
                        <td>{strArray[1]}</td>
                        <td>{strArray[2]}</td>
                        <td>{strArray[3]}</td>
                        <td>{strArray[4]}</td>
                        <td>{estimatedreturn}%</td>
                        <td>{option.closePrice}</td>
                        <td>{strArray[5]}</td>
                    </tr>
                </tbody>
            </table>*/}

                        <p>{strArray[0]}</p>
                        <p>{strArray[1]+' '+strArray[2]+' '+strArray[3]}</p>
                        <p>{strArray[4]}</p>
                        <p>{estimatedreturn}%</p>
                        <p>{option.closePrice}</p>
                        <p>{strArray[5]}</p>

            {/*}
            <p class='row'>{strArray[0]}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{strArray[1]} {strArray[2]}, {strArray[3]}
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{strArray[4]}
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{estimatedreturn}%
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{strArray[5]}
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{strArray[6]}
    </p>*/}
        </div>
    )

}

export default ResultRow