export default visualizeMap

// Display a graphical representation of a map
function visualizeMap(map)
{
	for ( let y = 0; y < map.length; y++ ) {
		let row = '| ';
		for ( let x = 0; x < map[0].length; x++ ) {
			row += map[y][x]
				? '■'
				: ' '
			row += ' ';
		}
		row += '|';
		console.log(row)
	}
}