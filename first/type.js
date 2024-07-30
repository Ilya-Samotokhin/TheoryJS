//'Строка'

const greeting = 'Привет'
const name = 'Александр'

const message = `${greeting}, ${name}`
console.log(message)

const a = 5
const b = 10
const sum = `Сумма a и b равна ${a + b}`

console.log(sum)

//Примеры канкатинации

//'Числа'

const posX = 50
const posY = -100
const posZ = 1.55

const point = ((posX + posY + posZ) * 2) / posX

console.log(point)

const c = -1000 / 0
const d = 100

console.log(c)

//Big int -9007199254740991 < number < 9007199254740991

console.log(9900000000000091 + 2)
console.log(9900000000000091n + 2n)

const number = 1_000_000_000 //можно использовать для удобства

// boolean

const age = 11
const isChild = age < 18

console.log(isChild)

//null пустая или неизвестная до определенного момента переменная
let date = null
console.log(date)

//undefined значение не было присвоено

let surname
console.log(surname) //лучше использовать null

//Объект предназначены для более сложных данных

const user = {}

//typeof проверка типа данных

console.log(typeof {})
console.log(typeof (1 + 1))

// Преобразование с явными и неявными данными
//неявные
const num = 111
const str = '222'
const result = num + str

console.log(result)
console.log(typeof result)

console.log(typeof ('16' / '8'))

// Явные

const eleven = 11
console.log(typeof eleven)
console.log(typeof String(eleven))

const isAdult = false

console.log(isAdult)
console.log(String(isAdult))
console.log(typeof isAdult)
console.log(typeof String(isAdult))

// каким бы не был объект он всегда выдаст одно значение
const obj = {}

console.log(String(obj))
// Number

console.log('11')
console.log(Number('11'))
console.log(typeof '11')
console.log(typeof Number('11'))

console.log(Number(true)) //1
console.log(Number(false)) //0
console.log(Number(null)) //0
console.log(Number(undefined)) //NaN

//Boolean

console.log(Boolean(-1)) //true
console.log(Boolean(0)) //false
console.log(Boolean(1)) //true
console.log(Boolean(2)) //true

console.log(Boolean('Привет!')) //true
console.log(Boolean('0')) //true
console.log(Boolean(' ')) //true
console.log(Boolean('')) //false
