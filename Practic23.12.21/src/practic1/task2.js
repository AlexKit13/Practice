let n = -1
let e = 3;
let c = 5;
let d = 15;

function calcSum(num,string) {
    if(num % e == 0,num % c == 0,num % d == 0 ){
        return (num * (n)) + parseInt(string)
    } else {
        return num + parseInt(string)
    }
}

module.exports = { calcSum };