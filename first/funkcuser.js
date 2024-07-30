//alert
alert('привет')

//prompt
const userAge = prompt('Сколько тебе лет?', 18)

if (userAge >= 18) {
	console.log('Доступ разрешен')
} else {
	console.log('Доступ запрещен')
}
//confirm
const isUserReady = confirm('Ты готов?')

if (isUserReady) {
	console.log('Начинаем')
} else {
	console.log('Ладно, подождем...')
}

// switch case

const age = +prompt('Сколько тебе лет')

switch (age) {
	case 0:
		console.log('Такого возраста не бывает')
		break
	case 18:
		console.log('Не верю, покажи паспорт')
		break
	case 1000:
		console.log('Вампир что ли')
		break

	default:
		console.log(`Твой возраст: ${age}`)
		break
}

const age1 = +prompt('Сколько тебе лет')

switch (true) {
	case age1 < 1:
		console.log('Такого возраста не бывает')
		break
	case age1 === 18:
		console.log('Не верю, покажи паспорт')
		break
	case age > 1000:
		console.log('Вампир что ли')
		break

	default:
		console.log(`Твой возраст: ${age}`)
		break
}
