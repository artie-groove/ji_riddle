// The idea is to "fly" across the map left to right, top to bottom
// dropping into a cell and initiating a recursive lookaround and
// logging every visited cell to a set

export default countIslands;

// Discovers islands on a given map
function countIslands(map)
{
	// Memorize the cells visited by the algorithm in a set
	const visitedCells = new Set();

	// Recursively explore terrain starting from (x, y) cell
	const lookaround = (x, y) => {
		// For id we just take a string representing the coordinates
		const cellId = `${x}:${y}`

		// Terminate exploration upon the following conditions are met:
		// 1) the cell is out of the map border
		// 2) there's water in the cell
		// 3) the cell was visited already
		if 	(	x < 0 						// left border						
			||	y < 0						// top border
			||	x >= map[0].length			// right border
			|| 	y >= map.length				// bottom border
			||	map[y][x] === 0 			// water
			|| 	visitedCells.has(cellId) 	// already visited
			)
			return false

		// Mark the cell as visited
		visitedCells.add(cellId)
		
		// Expand exploration to the nearest neighbour cells
		return lookaround(x, y-1)
			||	lookaround(x, y+1)
			||	lookaround(x-1, y)
			||	lookaround(x+1, y)
	} 

	// Will hold the number of islands discovered
	let counter = 0;

	// Go around the map and explore suitable cells
	for ( let y = 0; y < map.length; y++ ) {
		for ( let x = 0; x < map[0].length; x++ ) {
			if ( map[y][x] !== 0 && ! visitedCells.has(`${x}:${y}`) ) {
				lookaround(x, y)
				counter++
			}
		}
	}

	return counter;
}