const data = {
	code: 200,
	status: 'Ok',
	copyright: '© 2024 HOGWARTS',
	attributionText: 'Data provided by Hogwarts. © 2024 HOGWARTS',
	attributionHTML:
		'<a href="https://hp-api.onrender.com">Data provided by Hogwarts. © 2024 HOGWARTS</a>',
	etag: 'f069fc571b245cfbdd2a168a05d611fcdaeb4f71',
	data: {
		offset: 0,
		limit: 20,
		total: 1564,
		count: 20,
		results: response?.map((character) => ({
			id: character.id,
			name: character.name,
      house: character.house,
			description: `species: ${character.species}
      - gender: ${character.gender}
      - house: ${character.house}
      - wand wood: ${character.wand.wood}
      - wand core:${character.wand.core}
      - wand length: ${character.wand.length}`,
			thumbnail: {
				path: character.image,
				extension: 'jpg',
			},
			alternate_names: character.alternate_names?.map((name) => `${name}, `),
		})),
	},
};

const charcs = [
	{
		id: '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
		name: 'Harry Potter',
		alternate_names: [
			'The Boy Who Lived',
			'The Chosen One',
			'Undesirable No. 1',
			'Potty',
		],
		species: 'human',
		gender: 'male',
		house: 'Gryffindor',
		dateOfBirth: '31-07-1980',
		yearOfBirth: 1980,
		wizard: true,
		ancestry: 'half-blood',
		eyeColour: 'green',
		hairColour: 'black',
		wand: {
			wood: 'holly',
			core: 'phoenix tail feather',
			length: 11,
		},
		patronus: 'stag',
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: 'Daniel Radcliffe',
		alternate_actors: [],
		alive: true,
		image: 'https://ik.imagekit.io/hpapi/harry.jpg',
	},
	{
		id: '4c7e6819-a91a-45b2-a454-f931e4a7cce3',
		name: 'Hermione Granger',
		alternate_names: ['Hermy', 'Know-it-all', 'Miss Grant', 'Herm-own-ninny'],
		species: 'human',
		gender: 'female',
		house: 'Gryffindor',
		dateOfBirth: '19-09-1979',
		yearOfBirth: 1979,
		wizard: true,
		ancestry: 'muggleborn',
		eyeColour: 'brown',
		hairColour: 'brown',
		wand: {
			wood: 'vine',
			core: 'dragon heartstring',
			length: 10.75,
		},
		patronus: 'otter',
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: 'Emma Watson',
		alternate_actors: [],
		alive: true,
		image: 'https://ik.imagekit.io/hpapi/hermione.jpeg',
	},
	{
		id: 'c3b1f9a5-b87b-48bf-b00d-95b093ea6390',
		name: 'Ron Weasley',
		alternate_names: [
			'Dragomir Despard',
			'Ronald',
			'Ickle Ronniekins',
			'Ronnie',
			'Wheezy',
			'Won-Won',
			'Roonil Wazlib',
		],
		species: 'human',
		gender: 'male',
		house: 'Gryffindor',
		dateOfBirth: '01-03-1980',
		yearOfBirth: 1980,
		wizard: true,
		ancestry: 'pure-blood',
		eyeColour: 'blue',
		hairColour: 'red',
		wand: {
			wood: 'willow',
			core: 'unicorn tail hair',
			length: 14,
		},
		patronus: 'Jack Russell terrier',
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: 'Rupert Grint',
		alternate_actors: [],
		alive: true,
		image: 'https://ik.imagekit.io/hpapi/ron.jpg',
	},
	{
		id: 'efa802c8-ae18-4ae1-a524-49df21d05939',
		name: 'Lord Voldemort',
		alternate_names: [
			'Tom Riddle',
			'Tom Marvolo Riddle',
			'You-Know-Who',
			'He Who Must Not Be Named',
			'the Dark Lord',
			'the Heir of Slytherin',
		],
		species: 'human',
		gender: 'male',
		house: 'Slytherin',
		dateOfBirth: '31-12-1926',
		yearOfBirth: 1926,
		wizard: true,
		ancestry: 'half-blood',
		eyeColour: 'Scarlet',
		hairColour: 'bald',
		wand: {
			wood: 'yew',
			core: 'phoenix tail feather',
			length: 13.5,
		},
		patronus: '',
		hogwartsStudent: false,
		hogwartsStaff: false,
		actor: 'Ralph Fiennes',
		alternate_actors: [],
		alive: false,
		image: 'https://ik.imagekit.io/hpapi/voldemort.jpg',
	},
	{
		id: '3569d265-bd27-44d8-88e8-82fb0a848374',
		name: 'Severus Snape',
		alternate_names: ['Half-Blood Prince', 'Snivellus', 'Sev'],
		species: 'human',
		gender: 'male',
		house: 'Slytherin',
		dateOfBirth: '09-01-1960',
		yearOfBirth: 1960,
		wizard: true,
		ancestry: 'half-blood',
		eyeColour: 'black',
		hairColour: 'black',
		wand: {
			wood: '',
			core: '',
			length: null,
		},
		patronus: 'doe',
		hogwartsStudent: false,
		hogwartsStaff: true,
		actor: 'Alan Rickman',
		alternate_actors: [],
		alive: false,
		image: 'https://ik.imagekit.io/hpapi/snape.jpg',
	},
	{
		id: 'b415c867-1cff-455e-b194-748662ac2cca',
		name: 'Albus Dumbledore',
		alternate_names: ['Professor Dumbledore'],
		species: 'human',
		gender: 'male',
		house: 'Gryffindor',
		dateOfBirth: null,
		yearOfBirth: 1881,
		wizard: true,
		ancestry: 'half-blood',
		eyeColour: 'blue',
		hairColour: 'silver',
		wand: {
			wood: '',
			core: '',
			length: null,
		},
		patronus: 'Phoenix',
		hogwartsStudent: false,
		hogwartsStaff: true,
		actor: 'Richard Harris',
		alternate_actors: ['Michael Gambon'],
		alive: false,
		image: '',
	},
	{
		id: 'af95bd8a-dfae-45bb-bc69-533860d34129',
		name: 'Draco Malfoy',
		alternate_names: [],
		species: 'human',
		gender: 'male',
		house: 'Slytherin',
		dateOfBirth: '05-06-1980',
		yearOfBirth: 1980,
		wizard: true,
		ancestry: 'pure-blood',
		eyeColour: 'grey',
		hairColour: 'blonde',
		wand: {
			wood: 'hawthorn',
			core: 'unicorn tail hair',
			length: 10,
		},
		patronus: '',
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: 'Tom Felton',
		alternate_actors: [],
		alive: true,
		image: 'https://ik.imagekit.io/hpapi/draco.jpg',
	},
	{
		id: '3db6dc51-b461-4fa4-a6e4-b1ff352221c5',
		name: 'Neville Longbottom',
		alternate_names: [],
		species: 'human',
		gender: 'male',
		house: 'Gryffindor',
		dateOfBirth: '30-07-1980',
		yearOfBirth: 1980,
		wizard: true,
		ancestry: 'pure-blood',
		eyeColour: '',
		hairColour: 'blonde',
		wand: {
			wood: 'cherry',
			core: 'unicorn tail hair',
			length: 13,
		},
		patronus: 'Non-Corporeal',
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: 'Matthew Lewis',
		alternate_actors: [],
		alive: true,
		image: 'https://ik.imagekit.io/hpapi/neville.jpg',
	},
	{
		id: 'ca3827f0-375a-4891-aaa5-f5e8a5bad225',
		name: 'Minerva McGonagall',
		alternate_names: [],
		species: 'human',
		gender: 'female',
		house: 'Gryffindor',
		dateOfBirth: '04-10-1925',
		yearOfBirth: 1925,
		wizard: true,
		ancestry: 'half-blood',
		eyeColour: '',
		hairColour: 'black',
		wand: {
			wood: 'fir',
			core: 'dragon heartstring',
			length: 9.5,
		},
		patronus: 'tabby cat',
		hogwartsStudent: false,
		hogwartsStaff: true,
		actor: 'Dame Maggie Smith',
		alternate_actors: [],
		alive: true,
		image: 'https://ik.imagekit.io/hpapi/mcgonagall.jpg',
	},
	{
		id: '36bfefd0-e0bb-4d11-be98-d1ef6117a77a',
		name: 'Rubeus Hagrid',
		alternate_names: ['Professor Hagrid', 'Hagger'],
		species: 'half-giant',
		gender: 'male',
		house: 'Gryffindor',
		dateOfBirth: '06-12-1928',
		yearOfBirth: 1928,
		wizard: true,
		ancestry: 'half-blood',
		eyeColour: 'black',
		hairColour: 'black',
		wand: {
			wood: 'oak',
			core: '',
			length: 16,
		},
		patronus: '',
		hogwartsStudent: false,
		hogwartsStaff: true,
		actor: 'Robbie Coltrane',
		alternate_actors: [],
		alive: true,
		image: 'https://ik.imagekit.io/hpapi/hagrid.png',
	},
	{
		id: '861c4cde-2f0f-4796-8d8f-9492e74b2573',
		name: 'Luna Lovegood',
		alternate_names: ['Loony Lovegood'],
		species: 'human',
		gender: 'female',
		house: 'Ravenclaw',
		dateOfBirth: '13-02-1981',
		yearOfBirth: 1981,
		wizard: true,
		ancestry: '',
		eyeColour: 'silver',
		hairColour: 'blonde',
		wand: {
			wood: '',
			core: '',
			length: null,
		},
		patronus: 'hare',
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: 'Evanna Lynch',
		alternate_actors: [],
		alive: true,
		image: 'https://ik.imagekit.io/hpapi/luna.jpg',
	},
	{
		id: '1cd6dc64-01a9-4379-9cfd-1a7167ba1bb1',
		name: 'Ginny Weasley',
		alternate_names: [],
		species: 'human',
		gender: 'female',
		house: 'Gryffindor',
		dateOfBirth: '11-08-1981',
		yearOfBirth: 1981,
		wizard: true,
		ancestry: 'pure-blood',
		eyeColour: 'brown',
		hairColour: 'red',
		wand: {
			wood: 'yew',
			core: '',
			length: null,
		},
		patronus: 'horse',
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: 'Bonnie Wright',
		alternate_actors: [],
		alive: true,
		image: 'https://ik.imagekit.io/hpapi/ginny.jpg',
	},
	{
		id: '6afb1960-febd-418d-b604-e50c1b59459b',
		name: 'Bellatrix Lestrange',
		alternate_names: ['Bella'],
		species: 'human',
		gender: 'female',
		house: 'Slytherin',
		dateOfBirth: null,
		yearOfBirth: 1951,
		wizard: true,
		ancestry: 'pure-blood',
		eyeColour: 'brown',
		hairColour: 'black',
		wand: {
			wood: 'walnut',
			core: 'dragon heartstring',
			length: 12.75,
		},
		patronus: '',
		hogwartsStudent: false,
		hogwartsStaff: false,
		actor: 'Helena Bonham Carter',
		alternate_actors: [],
		alive: false,
		image: 'https://ik.imagekit.io/hpapi/bellatrix.jpg',
	},
];