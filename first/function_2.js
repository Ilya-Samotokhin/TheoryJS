//function decoration ее можно использовать до ее объявления
console.log(sum(2, 3))

function sum(a, b) {
	return a + b
}
// Неявный аргумент arguments, для неопределенного количества данных, записывает в массив

// function expression, работает как const, нельзя использовать до объявления

const logHello = function (param) {
	console.log(param)
}

logHello('hello')

// arrow function, нельзя использовать до объявления

const logSum = (a, b) => {
	console.log(a + b)
}

logSum(1, 2)
// можно записать в одну строку

const fullName = (name, surname) => `${name} ${surname}`

console.log(fullName('ilay', 'samotokhin'))

//collback function

const logMessage = (actionBefore, actionAfter) => {
	actionBefore()
	console.log('Hello')
	actionAfter()
}

const fn1 = () => console.log('before')
const fn2 = () => console.log('after')

logMessage(fn1, fn2)

//function kak resultat function

const validate = hasAccess => {
	return hasAccess
		? () => console.log('Доступ разрешен :)')
		: () => console.log('Доступ запрещен :(')
}

validate

const logoutMessage = validate(false)

logoutMessage()

/**
 * Глаголы-префиксы для функций:
 * get - получить какое-то значение
 * set - установить какое-то значение
 * create - создать какую-то сущность
 * update - обновить какую-то сущность
 * delete - удалить какую-то сущность
 * show - показать что-то
 * hide - скрыть что-то
 * search - вычислить что-то
 * calc - вычислить что-то
 * check - проверить что-то
 * sum - сумма
 */

const getPi = () => 3.14
const setWeather = weather => {
	/*...*/
}
const createUser = user => {
	/*...*/
}
const updateUser = id => {
	/*...*/
}
const deleteUser = id => {
	/*...*/
}
const showMenu = () => document.querySelector('.menu').classList
const hideMenu = () => document.querySelector('.menu').classList
const searchProducts = query => products.filter(({ name }) => name)
const calcSum = (a, b) => a + b
const checkAge = age => age > 18
