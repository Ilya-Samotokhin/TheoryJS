//синтаксис создания объекта
const firstEmptyObject = {}
const secondEmptyObject = new Object()

//пара КЛЮЧ: ЗНАЧЕНИЕ
const user = {
	login: 'iamsuperhero',
	'password-1': 'qwerty',
	'registration date': '01.01.2024',
	'last-auth': '05.04.2024',

	//метод объекта
	sayHi: () => console.log('Привет'),
	'say by': () => console.log('Пока'),
}

//получение значения

console.log(user.login)
console.log(user['password-1']) //если содержит пробел или дефиз

user.sayHi()
user['say by']()

console.log(user.blablabla)

//Добавление значений

const userTwo = {}

userTwo.name = 'Илья'
userTwo['is developer'] = true

console.log(userTwo)

//Изменение значений
userTwo.name = 'Максим'
userTwo.age = 35

console.log(userTwo)

// Удаление свойств

delete userTwo.name
delete userTwo['is developer']
delete userTwo.secondName

console.log(userTwo)

// Если значение совпадает с ключом, то можно оставить только ключ
const name = 'Илья'
const age = 28

const userThree = { name, age }

console.log(userThree)

//Имена свойств объектов всегда строки

const obj = {
	123: 'Example',
}

console.log(obj['123'])

//Имена свойств могут быть зарезервированными словами

const objTwo = {
	const: 'blabla',
	for: 'blablalb',
}

console.log(objTwo)

//Значения и ключ могут быть вычисляемыми
/*

const propName = prompt('Свойство с каким именем добавить в объект?')
const propValue = prompt(`Какое значение записать в свойство ${propName}?`)

const objThree = {
	[propName]: propValue, //обязательно использовать квадратные скобки
}

console.log(objThree)
s*/

const objFour = {
	[`bla-bla-${2 * 2}`]: true,
}

console.log(objFour)

// Проверка существования объекта

const userFive = {
	name: 'Ольга',
	age: 2,
}

console.log('isDeveloper' in userFive)
console.log(userFive.isDeveloper !== undefined) // можно, но не совсем корректно работает

//перебор свойств

const userSix = {
	name: 'EVA',
	age: 28,
	isDeveloper: false,
}

for (const key in userSix) {
	console.log(key)
}

for (const key in userSix) {
	console.log(userSix[key])
}

//Порядок свойств
const nums = {
	name: 'Ilya',
	2: 'Второй',
	1: 'Первый',
	3: 'Третий',
	age: 28,
}

for (const num in nums) {
	console.log(nums[num])
}

console.log(nums)
