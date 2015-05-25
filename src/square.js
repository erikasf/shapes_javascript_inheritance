var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(4, color);
  this.sideLength = sideLength;
}
var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

Square.prototype = {
	area: function(){
		return this.sideLength * this.sideLength;
	},
	perimeter: function(){
		return this.sideLength * 4;
	},
	draw: function(){
		var squa = "";
		for (var i = 0; i < this.sideLength; i++){
			squa+= "-";		
		}
		for (var j = 0; j < this.sideLength-1; j++){
			squa += "\n|";
			squa += " ";
			squa += "|";
		}
		squa += "\n";
		for (var k = 0; k < this.sideLength; k++){
			squa += "-";		
		}
		return squa;	
	}
};
module.exports = Square;

// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;
//use two lines on top to offset character height
//use one line on sides
