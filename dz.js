var dz = {

format: function(a, b){
	
	var up = a.toUpperCase();
	
	if (b == 1){
		var m = up.replace(/A/g, "X");
		var n = m.replace(/B/g, "E");
        return n;
	} else if ( b == 2){
	
		//Bell numerals
		var m = up.replace(/A/g, "*");
		var n = m.replace(/B/g, "#");
        return n;
	}
},

ol: function(){

	var text = "";
	var line = "";
	var fline = "";
	
	var long = document.getElementsByTagName("DOZ").length;
	
	for (i = 0; i < long; i++){
	var items = document.getElementsByTagName("DOZ")[i].getElementsByTagName("LI").length; //changed
		for ( j = 0; j < items;j++){
		
		text = document.getElementsByTagName("DOZ")[i].getElementsByTagName("LI")[j].innerHTML;
		line = (j + 1).toString(12);
			if (j == 0){
				fline = "<br>" + this.format(line, 1);
			} else {
				fline = this.format(line, 1);
			}
		fline += ". " + text;
		document.getElementsByTagName("DOZ")[i].getElementsByTagName("LI")[j].innerHTML = fline;
		
		}
	}
	
},

day: function(){
	this.x( new Date().getDate() );
},

year: function(){
	this.x( new Date().getFullYear() );
},

month: function(){
	var d = new Date();
	var mo = d.getMonth();
	var mon = parseInt(mo);
	var mont = (mon + 1).toString(12);
	var month = this.format(mont, 1);
	document.getElementById('date').innerHTML = month;
},

hour: function(){
	this.x( new Date().getHours() );
},

minute: function(){
	this.x( new Date().getMinutes() );
},

second: function(){
	this.x( new Date().getSeconds() );

},

x: function(a){
	var e = a;
	var f = parseInt(e);
	var g = (f).toString(12);
	var h = this.format(g, 1);
	document.getElementById('date').innerHTML = h;
},

to_doz: function(a){
	var b = (a).toString(12);
	var c = this.format(b, 1);
	document.getElementById('date').innerHTML = c;
},

to_dec: function(a){


var str = "";
var x;

for (x in a){

	if (a[x] == 'X' || a[x] == 'x' || a[x] == '*'){
		str += 'a';
	} else if (a[x] == 'E' || a[x] == 'e' || a[x] == '#'){
		str += 'b';
	} else {
		str += a[x];
	}
	
	
}

document.getElementById('date').innerHTML = parseInt(str, 12);



}



}