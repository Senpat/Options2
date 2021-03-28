/**
 * Black-Scholes option pricing formula and supporting statistical functions.
 * From: https://www.npmjs.com/package/black-scholes
 */

/**
 * Standard normal cumulative distribution function.  The probability is estimated
 * by expanding the CDF into a series using the first 100 terms.
 * See {@link http://en.wikipedia.org/wiki/Normal_distribution#Cumulative_distribution_function|Wikipedia page}.
 *
 * @param {Number} x The upper bound to integrate over.  This is P{Z <= x} where Z is a standard normal random variable.
 * @returns {Number} The probability that a standard normal random variable will be less than or equal to x
 */
 const  stdNormCDF = (x) => {
    var probability = 0;
    // avoid divergence in the series which happens around +/-8 when summing the
    // first 100 terms
    if (x >= 8) {
        probability = 1;
    }
    else if (x <= -8) {
        probability = 0;
    }
    else {
        for (var i = 0; i < 100; i++) {
            probability += (Math.pow(x, 2 * i + 1) / _doubleFactorial(2 * i + 1));
        }
        probability *= Math.pow(Math.E, -0.5 * Math.pow(x, 2));
        probability /= Math.sqrt(2 * Math.PI);
        probability += 0.5;
    }
    return probability;
}

/**
 * Double factorial.  See {@link http://en.wikipedia.org/wiki/Double_factorial|Wikipedia page}.
 * @private
 *
 * @param {Number} n The number to calculate the double factorial of
 * @returns {Number} The double factorial of n
 */
function _doubleFactorial(n) {
    var val = 1;
    for (var i = n; i > 1; i -= 2) {
        val *= i;
    }
    return val;
}

/**
 * Black-Scholes option pricing formula.
 * See {@link http://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model#Black-Scholes_formula|Wikipedia page}
 * for pricing puts in addition to calls.
 *
 * @param   {Number} s       Current price of the underlying
 * @param   {Number} k       Strike price
 * @param   {Number} t       Time to experiation in years
 * @param   {Number} v       Volatility as a decimal
 * @param   {Number} r       Anual risk-free interest rate as a decimal
 * @param   {String} callPut The type of option to be priced - "call" or "put"
 * @returns {Number}         Price of the option
 */
const blackScholes = (s, k, t, v, r, callPut) => {
    var price = null;
    var w = (r * t + Math.pow(v, 2) * t / 2 - Math.log(k / s)) / (v * Math.sqrt(t));
    if (callPut.toLowerCase() === "call") {
        price = s * stdNormCDF(w) - k * Math.pow(Math.E, -1 * r * t) * stdNormCDF(w - v * Math.sqrt(t));
    }
    else // put
    {
        price = k * Math.pow(Math.E, -1 * r * t) * stdNormCDF(v * Math.sqrt(t) - w) - s * stdNormCDF(-w);
    }
    return price;
}

/**
 * Calcuate omega as defined in the Black-Scholes formula.
 *
 * @param   {Number} s Current price of the underlying
 * @param   {Number} k Strike price
 * @param   {Number} t Time to experiation in years
 * @param   {Number} v Volatility as a decimal
 * @param   {Number} r Anual risk-free interest rate as a decimal
 * @returns {Number} The value of omega
 */
function getW(s, k, t, v, r) {
    var w = (r * t + Math.pow(v, 2) * t / 2 - Math.log(k / s)) / (v * Math.sqrt(t));
    return w;
}

//for newly added volatility code
class Option {
    constructor(s, k, t, r, p, callPut) {
        this.s = s;
        this.k = k;
        this.t = t;
        this.r = r;
        this.p = p; //actual option price
        this.callPut = callPut;
    }
}

const  getVolatility = (option) => {
    var i;
    var v = 0;
    var price = null;
    var difference = 1000000000;
    for (i = 0; i <= 1; i += 0.001) {
        //var w = (option.r * option.t + Math.pow(i, 2) * option.t / 2 - Math.log(option.k / option.s)) / (i * Math.sqrt(option.t));
        if (option.callPut === "call") {
            //price = option.s * stdNormCDF(w) - option.k * Math.pow(Math.E, -1 * option.r * option.t) * stdNormCDF(w - i * Math.sqrt(option.t));
            price = blackScholes(option.s,option.k,option.t,i,option.r,"call")
            if (Math.abs(price - option.p) < difference) {
                difference = Math.abs(price - option.p);
                v = i;
            }
        }/*
        else // put
        {
            price = option.k * Math.pow(Math.E, -1 * option.r * option.t) * stdNormCDF(i * Math.sqrt(option.t) - w) - option.s * stdNormCDF(-w);
            if (Math.abs(price - option.p) < difference) {
                difference = Math.abs(price - option.p);
                v = i;
            }
        }*/
    }
    console.log('difference ' + difference)
    return v;
}
/*
module.exports = {
    blackScholes: blackScholes,
    stdNormCDF: stdNormCDF,
    getW: getW
};*/

//console.log(blackScholes(30, 34, .25, .2, .08, "call"));
//let op = new Option(30, 34, .25, .08, 0.238349, "call");
//console.log(getVolatility(op));

//console.log(blackScholes(30, 34, .25, .2, .08, "put"));
//let op2 = new Option(30, 34, .25, .08, 3.5651, "put");
//console.log(getVolatility(op2));
/*
let op3 = new Option(2024.73, 900, .0548, .03, 1126.208, "call");
console.log(getVolatility(op3));
console.log(blackScholes(2024.73,900,0.0548,0.29,.03,"call"))
*/

export default blackScholes