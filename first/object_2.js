//Сравнение объектов ссылочный тип данных

const obj1 = { age: 10 }
const obj2 = { age: 10 }

console.log(obj1 === obj2)
console.log(obj1 == obj2)

//каждый объект имеет свою ссылку

const obj3 = { name: 'Илья' }
const obj4 = obj3

console.log(obj4)
obj4.name = 'Максим'

console.log(obj3)

//Сравнение объектов, получение ключей объекта через Object.keys()

const obj5 = {
	name: 'Илья',
	age: 27,
	address: {
		city: 'NINO',
		zipcode: 603003,
	},
}

const obj6 = {
	name: 'Илья',
	age: 27,
	address: {
		city: 'NINO',
		zipcode: 603003,
	},
}

const areObjectsEqual = (object1, object2) => {
	const keys1 = Object.keys(object1)
	const keys2 = Object.keys(object2)

	console.log('Длинна keys1:', keys1.length)
	console.log('Длинна keys2:', keys2.length)

	if (keys1.length !== keys2.length) {
		return false
	}

	for (const key in object1) {
		const value1 = object1[key]
		const value2 = object2[key]
		const areValueObjects =
			typeof value1 === 'object' && typeof value2 === 'object'

		if (areValueObjects) {
			return areObjectsEqual(value1, value2)
		}

		if (value1 !== value2) {
			return false
		}
	}

	return true
}
console.log('Равны ли объекты obj1 b obj2:', areObjectsEqual(obj5, obj6))

//копирование объекта assign

const obj7 = { name: 'Ilya' }
const obj8 = Object.assign({}, obj7)

obj8.name = 'Oleg'

console.log(obj7)
console.log(obj8)
//Оператор расширения spread operator
const obj9 = { name: 'Alex' }
const objX = { ...obj9 }

objX.name = 'Olga'

console.log(obj9)
console.log(objX)

//Объединение объектов только поверхностное с вложенными объектами сложнее((

const obj11 = { name: 'Alexandr' }
const obj12 = { age: 27 }

const user = Object.assign({}, obj11, obj12)

console.log('User', user)

// для объединения можно использовать спред оператор

const userSpread = { ...obj11, ...obj12 }
console.log('UserSpread', userSpread)
