// Опциональная цепочка

const user = {
	name: 'Александр',
	age: 28,
	address: {
		city: 'Москва',
		zipcode: 12345,
	},
}

console.log(user.address.city)

// если объект в данный момент не существует, или может не существовать, ставим ?
console.log(user.family?.mom) //иначе будет ошибка которая остановит весь код

//Пример

/**
 * Пример ожидаемого результата: {
 * name: 'vasya123',
 * age: 15,
 * hasPremium: true,
 * }
 */

// const userInfo = await fetchUserInfo()

// renderUserName(userInfo?.name) Запрос на сервер обрабатывается не сразу для того что бы найти имя нужно не допустить ошибки в этом поможет Optional chaining (?)
// renderCatalog()

//Пример 2
const guest1 = {
	name: 'Vasiliy',
	age: 30,
	orderInfo: {
		roomType: 2,
		stayDates: {
			from: '14.04.2024',
			to: '21.04.2024',
		},
	},
}

const guest2 = {
	name: 'kate',
	age: 25,
}

const logGuestInfo = guest => {
	//Проверка для избежания ошибок, если искомые данные существуют то они записываются, если нет то null
	const checkoutDate =
		guest.orderInfo && guest.orderInfo.stayDates && guest.orderInfo.stayDates.to
			? guest.orderInfo.stayDates.to
			: null

	console.log(`
    Имя: ${guest.name}
    Возраст: ${guest.age}
    Дата выезда: ${checkoutDate}
    
    `)
	//Более короткая запись
	//Дата выезда: ${guest.orderInfo?.stayDates?.to ?? 'Не указана'}
}

console.log(guest1)
console.log(guest2)

// Деструктуризация объекта

const user1 = {
	name: 'Ilya',
	age: 28,
	isDeveloper: true,
}

const name = user1.name
const age = user1.age
const isDeveloper = user1.isDeveloper

console.log('name:', name)
console.log('age:', age)
console.log('isDeveloper:', isDeveloper)

// Упрощенный вариант

const { name1, age1, isDeveloper1 } = user //Работает с одноименными свойствами

//Деструктуризация в параметрах функции

const logAddress = (city, street, houseNumber, apartmentNumber) => {
	console.log(`
    Адрес:
    г. ${city}, ул. ${street},
    д. ${houseNumber}, кв. ${apartmentNumber}
    `)
}

logAddress('Нижний', 'Дмитрия Павлова', 21, 35)

//Более правильное использование

const logAddressTrue = address => {
	console.log(`
    Адрес:
    г. ${address.city}, ул. ${address.street},
    д. ${address.houseNumber}, кв. ${address.apartmentNumber}
    `)
}

logAddressTrue({
	city: 'Nizniy',
	street: 'Dmitriya Pavlova',
	houseNumber: 7,
	apartmentNumber: 18,
})

//Упрощенная Функция
const logAddressGood = address => {
	const { city, street, houseNumber, apartmentNumber } = address

	console.log(`
    Адрес:
    г. ${city}, ул. ${street},
    д. ${houseNumber}, кв. ${apartmentNumber}
    `)
}

logAddressGood({
	city: 'Moscow',
	street: 'Pushkina',
	houseNumber: 18,
	apartmentNumber: 63,
})

//Деструктуризация с переименованием

const user2 = {
	name: 'Alex',
}

const admin = {
	name: 'boss',
}

const { name: user2Name } = user
const { name: adminName } = admin

console.log('userName:', user2Name)
console.log('adminName:', adminName)

//Деструктуризация со значением по умолчанию

const user3 = {
	name: 'Alex',
	age: 28,
	city: 'Moscow',
}

const user4 = {
	name: 'Ilya',
	age: 27,
}

const { city = 'не указан' } = user3
const { city: user4Ilya = 'не указан' } = user4

console.log('Город:', city)
console.log('Город:', user4Ilya)

// Остаточные параметры (Можно прописать только в конце)

const logUser1 = user5 => {
	const { name, age, city, ...otherInfo } = user5

	console.log(`
    Имя: ${name}
    Возраст: ${age}
    Город: ${city}
    `)
	console.log('Доп инфо:', otherInfo)
}

logUser1({
	name: 'Ilya',
	age: 28,
	city: 'NiNo',
	company: 'VK',
	jobPost: 'Фронтенд-Разработчик',
})
