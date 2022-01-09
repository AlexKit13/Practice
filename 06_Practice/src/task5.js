// Напишите свою реализацию  метода bind

const student = {
    name : 'Александр'
}

function info(age, course, city){
    console.log(`Имя: ${this.name}  возраст: ${age}, курс: ${course}, город: ${city}`)
}

function bind(fun, context){
    return fun.bind(context)
}

bind(info, student)('27', 'Front - End', 'Харьков')

module.exports = { info };