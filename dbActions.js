const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: "./interview.sqlite" 
	}
});

exports.getUrlFromShortened = (shortened) => {
	return knex('links')
	.select('url')
	.where('shortened', shortened)
}

exports.getShortenedFromUrl = (url) => {
	return knex('links')
	.select('shortened')
	.where('url', url)
}

// Insert new value and return the shortened url
exports.insertNewUrl = (url, shortened) => {
	return knex('links')
	.insert([{url: url, shortened: shortened}], ['shortened'])
}
