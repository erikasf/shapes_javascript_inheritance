var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(sideLength, sideWidth, color) { 
	Shape.call(this, 4, color);
	this.sideLength = sideLength;
	this.sideWidth = sideWidth;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype = {
	area: function(){
		return this.sideWidth * this.sideLength;
	},
	perimeter: function(){
		return this.sideWidth*2 + this.sideLength*2;
	},
	draw: function(){
	   var rect = "";
	   for (var i = 0; i < this.sideWidth; i++){
		    rect += "-";		
	   }
	   for (var j = 0; j < this.sideLength; j++){
		  rect += "\n|";
		    rect += " ";
		    rect += "|";
	   }
  	    rect += "\n";
	   for (var k = 0; k < this.sideWidth; k++){
		   rect+= "-";		
	   }
	return rect;	
}
};


module.exports = rect;
