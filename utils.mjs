export {
	generateMap,
	getRandomIntegerConstrained,
	getGrammaticalNumberForNoun,
	getGrammaticalNumberForVerbToBe
}

// Generates the map of a given size
function generateMap(width, height)
{
	let map = []
	for ( let y = 0; y < height; y++ ) {
		let row = []
		for ( let x = 0; x < width; x++ ) {
			let rnd = Math.round(Math.random());
			row.push(rnd);
		}
		map.push(row);
	}
	return map
}

// Returns a random integer ranging from min to min + dmax inclusive 
function getRandomIntegerConstrained(min, dmax) {
	return min + Math.round(Math.random() * dmax)
}


// Prepare localized pluralization object 
const pr = new Intl.PluralRules('en-US', { 
	type: 'cardinal' 
})

// Gets the correct inflection of a noun
// to agree with the number n
function getGrammaticalNumberForNoun(noun, n) {
	return pr.select(n) === "other"
		? `${noun}s`
		: noun
}

// Gets the correct form of the verb 'to be'
function getGrammaticalNumberForVerbToBe(n) {
	return pr.select(n) === "other"
		? 'are'
		: 'is'
}