// =============================
// Islands discovery algorithm
// =============================


// Problem

// Given a two-dimensional array filled with random binary values
// count the number of "islands" formed by a set of perpendicular
// adjacent cells containing numbers "1"


// Sample input

// 1 0 1 	|
// 1 0 0 	|===> 2 islands
// 1 1 1 	|

// 1 0 1	|	
// 0 1 0	|===> 5 islands
// 1 0 1	|


import { 
	generateMap,
	getRandomIntegerConstrained,
	getGrammaticalNumberForNoun,
	getGrammaticalNumberForVerbToBe } from './utils.mjs'
import countIslands from './analyzer.mjs'
import visualizeMap from './visualizer.mjs'

// Generates n random maps and displays them
// along with the calculated amount of islands
function printSomeMaps(n)
{
	// Defining minimums
	const MIN_WIDTH = 3
	const MIN_HEIGHT = 3

	// Maximum deltas for map width and height
	const MAX_DW = 2
	const MAX_DH = 2

	// Adjusting messages to natural language
	const gnMaps = getGrammaticalNumberForNoun("map", n)
	const gnToBe = getGrammaticalNumberForVerbToBe(n)
	console.log(`Here ${gnToBe} ${n} random ${gnMaps}`)
	console.log('=======================\n')

	for ( let i = 0; i < n; i++ ) {		
		const width = getRandomIntegerConstrained(MIN_WIDTH, MAX_DW)
		const height = getRandomIntegerConstrained(MIN_HEIGHT, MAX_DH)
		const map = generateMap(width, height)
		const found = countIslands(map)
		const gnIsland = getGrammaticalNumberForNoun("island", found)
		console.log(`--- ${found} ${gnIsland} (size: ${width}x${height}) ---`)
		visualizeMap(map, found)
		console.log('')
	}	
}

printSomeMaps(5)
