//function decoration

function logHello() {
	console.log('Привет')
}

logHello()

//Параметры в функции
function logMessage(message, count) {
	for (let i = 0; i < count; i++) {
		console.log(message)
	}
}

logMessage('Привет', 3)

// параметры внутри функции можно переопределять даже если она константа
const message = 'hello'

function logMessage(message, count = 1) {
	message = `(((${message})))`

	for (let i = 0; i < count; i++) {
		console.log(message)
	}
}

logMessage(message, 3)
console.log(message)

// значения по умолчанию

function sumFiveNumbers(num1, num2 = 200, num3 = 300, num4 = 400, num5 = 100) {
	const sum = num1 + num2 + num3 + num4 + num5

	console.log(`Сумма чисел равна ${sum}`)
}

sumFiveNumbers(1000)

// возврат значения
function sum(a, b) {
	return a + b

	console.log('Hello') // не работает
}

const sum1 = sum(100, 1)

console.log(sum1)

//

function getAgeType(age) {
	if (typeof age !== 'number') {
		return 'Возраст указан некорректно'
	}

	if (age < 1 || age > 125) {
		return 'Такого возраста не может быть'
	}

	if (age < 18) {
		return 'Несовершеннолетний'
	}
	return 'Взрослый'
}

console.log(getAgeType(24))

function getSecretMessage(name) {
	if (!name) return
	return `О, я тебя знаю! Ты же тот самый ${name}?`
}

console.log(getSecretMessage())
