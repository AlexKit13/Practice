
function checkNumber(numb) {
    let Array = [true, false, false];

    if (numb>0) {
        for (let i = 2; i < numb; i++)
            if (numb % i == 0) Array[0] = false;
    }else{
        Array[0] = false;
    }

    if (numb % 2 == 0) {
        Array[1] = true;
    }

    if (numb % 10 == 0) {
        Array[2] = true;
    }

    return Array;
}

module.exports = { checkNumber };
