var data;

d3.json('testdicksteakstats.json', function (error, json) {
data = json;

//Length of object
// var paLength = 0;
// for (var obj in data) {
// 	if (data[obj].fifteen.pa) {
// 		paLength++;
// 	}
// };
// console.log(Object.keys(data.Riley.ten).length);

// for (var obj in data) {
// 	var xtemp, ytemp;
// 	if (data[obj].fifteen) {
// 		var results = data[obj].fifteen.pf;
// 		console.log(obj + ": " + results);
// 	}
// }

var barWidth = 30;
var width = (barWidth + 10) * data.length;
var height = 800;

var x = d3.scale.linear()
				.domain([0, data.length])
				.range([0, width]);

var x = d3.scale.linear().domain([0, data.length]).range([0, width]);
var y = d3.scale.linear().domain([0, d3.max(data, function(d) { return d.stats; })]).
  rangeRound([0, height]);


var canvas = d3.select("#stats")
				.append("svg")
	  			.attr("width", width)
	  			.attr("height", height);

var bars = canvas.selectAll("rect")
				.data(data)
				.enter()
				.append("rect");

var barAttr = bars				
  				.attr("x", function(d, i) { return x(i); })
  				.attr("y", function(d) { return height - 222; })
  				.attr("height", function (d,i) { 
  												if (d.stats[i].year === 2015) {
  													return d.stats[i].tw; }
											 }
				     )
  				.attr("width", barWidth)
  				.attr('fill', "#2d578b");
// console.log(d3.select('#stats'));
});