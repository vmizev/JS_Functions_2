// Задача 1
function randomStr() {
	const str = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
			
	let size = 15,
		res = '';		
  
	for (let i = 0; i < size; i++) {
		res += str.charAt(Math.floor(Math.random() * str.length))
	}
  
	return res;
}

console.log('Строка из 15 случайных символов:',randomStr());


// Задача 2
var users = [
	{
		name: 'Denis',
		age: 28,
		male: 'man'
	},
	{
		name: 'Ira',
		age: 50,
		male: 'wooman'
	},
	{
		name: 'Ivan',
		age: 32,
		male: 'man'
	},
	{
		name: 'Maksim',
		age: 46,
		male: 'man'
	},
	{
		name: 'Olga',
		age: 28,
		male: 'wooman'
	},
	{
		name: 'Oksana',
		age: 53,
		male: 'wooman'
	},
	{
		name: 'Dmitry',
		age: 28,
		male: 'man'
	},
	{
		name: 'Ludmila',
		age: 19,
		male: 'wooman'
	},
	{
		name: 'Larisa',
		age: 28,
		male: 'wooman'
	},
	{
		name: 'Natalia',
		age: 49,
		male: 'wooman'
	},
	{
		name: 'Valera',
		age: 63,
		male: 'man'
	},
	{
		name: 'Andrey',
		age: 33,
		male: 'man'
	},
	{
		name: 'Svetlana',
		age: 26,
		male: 'wooman'
	},
	{
		name: 'Raisa',
		age: 47,
		male: 'wooman'
	},
	{
		name: 'Oksana',
		age: 21,
		male: 'wooman'
	},
	{
		name: 'Elena',
		age: 38,
		male: 'wooman'
	},
	{
		name: 'Pavel',
		age: 32,
		male: 'man'
	},
	{
		name: 'Evgeny',
		age: 33,
		male: 'man'
	},
	{
		name: 'Stas',
		age: 28,
		male: 'man'
	},
	{
		name: 'Katya',
		age: 27,
		male: 'wooman'
	},
	{
		name: 'Valentina',
		age: 24,
		male: 'wooman'
	},
	{
		name: 'Olga',
		age: 17,
		male: 'wooman'
	},
	{
		name: 'Nikolay',
		age: 57,
		male: 'man'
	},
	{
		name: 'Vitaliy',
		age: 28,
		male: 'man'
	},
	{
		name: 'Konstantin',
		age: 30,
		male: 'man'
	}
];

let newObj = {};

function createNewObj(users) {

	users.forEach(function(user, num) {
		let key = user['name'].toLowerCase() + '_' + ++num;
		newObj[key] = user;
	});

	return newObj;
}

console.log(createNewObj(users));