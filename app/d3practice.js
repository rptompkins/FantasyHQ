var data;

var canas;


d3.json('newdicksteakstats.json', function (error, json) {
data = json;

for (var obj in data) {
	if (data[obj].fifteen) {
		var results = data[obj].fifteen.pf;
		console.log(obj + ": " + results);
	}
}

});


