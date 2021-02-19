enum operator {
    P = '+',
    M = '-',
    F = '*',
    D = '/',
    MM = '%'
}

type callback = { (err: Error, result?: undefined): Error, (err: null, result: number): number };
function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: number): Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log('result = ' + result);
    return result;
}

function superCumputer(fnumber: number, op: string, lnumber: number, cb: callback): number | Error{
    try {
        if (op === operator.P) {
            return cb(null, fnumber + lnumber);
        }
        if (op === operator.M) {
            return cb(null, fnumber - lnumber);
        }
        if (op === operator.F) {
            return cb(null, fnumber * lnumber);
        }
        if (op === operator.D) {
            return cb(null, fnumber / lnumber);
        }
        if (op === operator.MM) {
            return cb(null, fnumber / lnumber);
        }
    } catch (error) {
        return cb(error, 0);
    }
}

superCumputer(3, '+', 3, callback);