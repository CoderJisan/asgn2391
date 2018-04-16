function redFunction(){
	var quotes = ["Honesty is the first chapter in the book of wisdom." , "Stay Hungry Stay Foolish?" , "Dreams and Dedication are a powerful combination.." , "The best preparation for tomorrow is dooing your best for today!" , "When you reach the end of your rope in it and hang on." , "There is nothing permanent except change." , "There is no charm equal to tenderness of heart" , "Life without love is like a tree without blossoms or fruit" , "Think in the morning,Act in the  noon,Eat in the evening, Sleep in the night"];
	var random = Math.floor((Math.random() * quotes.length) + 0);
	document.getElementById('qut').innerHTML = quotes[random];
	document.getElementById("myquote").style.backgroundColor = "rgb(249,2,2)";
	document.getElementById("myquote").style.fontFamily = "fantasy";
}

function blueFunction(){
	var quotes = ["Honesty is the first chapter in the book of wisdom." , "Stay Hungry Stay Foolish?" , "Dreams and Dedication are a powerful combination.." , "The best preparation for tomorrow is dooing your best for today!" , "When you reach the end of your rope in it and hang on." , "There is nothing permanent except change." , "There is no charm equal to tenderness of heart" , "Life without love is like a tree without blossoms or fruit" , "Think in the morning,Act in the  noon,Eat in the evening, Sleep in the night"];
	var random = Math.floor((Math.random() * quotes.length) + 0);
	document.getElementById('qut').innerHTML = quotes[random];
	document.getElementById("myquote").style.backgroundColor = "rgb(4,29,193)";
	document.getElementById("myquote").style.fontFamily = "serif";
}

function greenFunction(){
	var quotes = ["Honesty is the first chapter in the book of wisdom." , "Stay Hungry Stay Foolish?" , "Dreams and Dedication are a powerful combination.." , "The best preparation for tomorrow is dooing your best for today!" , "When you reach the end of your rope in it and hang on." , "There is nothing permanent except change." , "There is no charm equal to tenderness of heart" , "Life without love is like a tree without blossoms or fruit" , "Think in the morning,Act in the  noon,Eat in the evening, Sleep in the night"];
	var random = Math.floor((Math.random() * quotes.length) + 0);
	document.getElementById('qut').innerHTML = quotes[random];
	document.getElementById("myquote").style.backgroundColor = "rgb(102,189,1)";
	document.getElementById("myquote").style.fontFamily = "monospace";
}

function yellowFunction(){
	var quotes = ["Honesty is the first chapter in the book of wisdom." , "Stay Hungry Stay Foolish?" , "Dreams and Dedication are a powerful combination.." , "The best preparation for tomorrow is dooing your best for today!" , "When you reach the end of your rope in it and hang on." , "There is nothing permanent except change." , "There is no charm equal to tenderness of heart" , "Life without love is like a tree without blossoms or fruit" , "Think in the morning,Act in the  noon,Eat in the evening, Sleep in the night"];
	var random = Math.floor((Math.random() * quotes.length) + 0);
	document.getElementById('qut').innerHTML = quotes[random];
	document.getElementById("myquote").style.backgroundColor = "rgb(234,150,3)";
	document.getElementById("myquote").style.fontFamily = "cursive";
}

function weightConverter(valNum){
	document.getElementById("outputKilograms").innerHTML = valNum / 2.2046
}
function calculate(){
	var values = document.getElementById('numbers').value.split(/,/g);
	var sum = values.reduce(function(a,b){
		return parseInt(a) + parseInt(b);
	});
	Array.prototype.max = function(){
		return Math.max.apply(null,this);
	};
	Array.prototype.min = function(){
		return Math.min.apply(null,this);
	};
	document.getElementById('sum').innerHTML = sum;
	document.getElementById('max').innerHTML = values.max();
	document.getElementById('min').innerHTML = values.min();
	document.getElementById('avg').innerHTML = sum / values.length;
	document.getElementById('reverse').innerHTML = values.reverse().join(',');
}

function upperCase(){
	document.getElementById('upper').onclick = lowerCase;
	document.getElementById('upper').innerHTML = "Lower Case";
	var str = document.getElementById('text').value;
	str = str.toUpperCase();
	document.getElementById('text').value = str;
}

function lowerCase(){
	document.getElementById('upper').onclick = upperCase;
	document.getElementById('upper').innerHTML = "Upper Case";
	var str = document.getElementById('text').value;
	str = str.toLowerCase();
	document.getElementById('text').value = str;
}
		
function sort(){
	var textarea = document.getElementById('text');
	textarea.value = textarea.value.split("\n").sort().join("\n");
}
function reverse(){
	var text = document.getElementById('text');
	text.value = text.value.split('\n').reverse().join('\n');
}
function trim(){
	var textarea = document.getElementById('text').value.split('\n');
	var array = ""
	for(var i=0; i<textarea.length; i++){
		textarea[i] = textarea[i].trim();
	}
	for(var i = 0; i < textarea.length; i++){
		if(i<textarea.length-1){
			array = array + textarea[i]+"\n";
		}
		else{
			array = array + textarea[i];
		}
	}
	array = array.replace(/(ˆ[ \t]*\n)/gm,"");
	document.getElementById('text').value = array;
}
function linenumber() {
    var a = document.getElementById('text').value.split('\n');
    for (var i = 0; i < a.length; i++) {
        a[i] = (i + 1) + ". " + a[i];
    }
    // var textarea = document.getElementById("text");
    // textarea.value = ;
    document.getElementById('text').innerHTML = a.join('\n');
}

function shuffle() {
    var a = document.getElementById('text').value.split('\n');
    for (var i = 0; i < a.length; i++) {
        var j = i + parseInt(Math.random() * (a.length - i));
        if (i != j) {
            var temp = a[i];  
            a[i] = a[j];
            a[j] = temp;
        }
    }
    // document.getElementById('text').innerHTML = a;
    var textarea = document.getElementById("text");
    textarea.value = a.join("\n");
}