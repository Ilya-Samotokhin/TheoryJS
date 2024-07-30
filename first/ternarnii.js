//if else

const year = 2024

if (year === 2024) {
	console.log('Ура!')
	console.log('Ура!')
} else if (year === 3000) {
	console.log('Слишком поздно =/')
} else {
	console.log('неизвестный год =/')
}

// тернарный оператор

const years = 2024
let sms = null

if (years === 3000) {
	sms = 'Начинаем учиться'
} else {
	sms = 'уже поздно учиться'
}

const check = years === 2024 ? 'Начинаем учиться' : 'УЧИСЬ'

console.log(sms)
console.log(check)

// логические операторы

// || или

const age = 17
const widthParent = false

if (age > 18 || widthParent) {
	console.log('Проходите')
} else {
	console.log('Несовершеннолетним вход закрыт')
}

const result = '' || false || null || undefined || 0 || 'Привет' || 'Пока'

console.log(result)

// && и

const moneyInWallet = 6
const iceCreamPrice = 2
const isStoreOpen = true

if (iceCreamPrice < moneyInWallet && isStoreOpen) {
	console.log('Вот ваше мороженое')
} else {
	console.log('Магазин закрыт')
}

// ! не

console.log(!true)
console.log(!false)

console.log(!!0)
console.log(!!1)

// ?? оператор нулевого слияния проверяет лиш то что оператор не является null или undefined

const a = 0
const b = 100

const result1 = a || b
const result2 = a ?? b

console.log(result1)
console.log(result2)
