<!DOCTYPE html>
<html>
<head>
	<title>Assignment 2</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="myScript.js"></script>
</head>

<body style="padding: 20px;">
	<div>
	<?php
	  include 'header.php';
	?>
	</div>
	<div class="menu-bars">
		<a href="#index.php">Quote Box</a>
		<a href="#converter">Hero Converter</a>
		<a href="#min-max">Min-Max &amp; More</a>
		<a href="#magic">Magic</a>
	</div>
	<div class="myquote" id="myquote">
		<label><span id="qut"></span></label>
	</div>
	<div class="buttons">
		<button class="red" id="red" name="red" onclick="redFunction()"></button>		
		<button class="blue" name="blue" onclick="blueFunction()"></button>
		<button class="green" name="green" onclick="greenFunction()"></button>
		<button class="yellow" name="yellow" onclick="yellowFunction()"></button>
	</div>
	<div class="pickColor">
		<h4>Click on any color and get some knowledge!</h4>
	</div>
	<div class="converter" id="converter">
		<label id="conTex">Converter: </label>
		<input type="number" id="pound" placeholder="Pounds" oninput="weightConverter(this.value)" onchange="weightConverter" name="">
		<p>
		<label id="conTex"> Kilograms: <span id="outputKilograms"></span></label></p>
	</div>
	<div class="min-max" id="min-max" style="color: #dce05a;">
		<h3>Finding Max, Min, Sum, Average and Reverse Order</h3>
		<label>Input Series of Numbers: </label> 
		<input type="text" name="numbers" id="numbers" style="color: #3F51B5;">
		<button style="color: #3F51B5;" onclick="calculate()">Show Results</button> 
		<label style="color: red;">&#91;Separate them with a comma &#40;&#44;&#41; But don't put any comma&#40;&#44;&#41; at the end of last number &#93;</label>
		<p>Summation of all Inserted Numbers: <span id="sum"></span></p>
		<p>Maximum number among Inserted Numbers: <span id="max"></span></p>
		<p>Minimum number among Inserted Numbers: <span id="min"></span></p>
		<p>Average of the Numbers: <span id="avg"></span></p>
		<p>Reverse order of the Inserted Numbers: <span id="reverse"></span></p>
	</div>
	<div class="magic" id="magic">
		<p><textarea style="height: 200px;" class="text" id="text">Sample Item:1&#013;&#010;Sample Item:2&#013;&#010;Sample Item:3&#013;&#010;Sample Item:4&#013;&#010;Amar Item: 1
	    </textarea></p>
		<div class="magicButton" id="magicButton">
			<label><button type="button" class="btn btn-danger" value="clear" onclick="document.getElementById('text').value = ''">Clear It</button></label>
			<label><button type="button" class="btn btn-primary" id="upper" onclick="upperCase()">Upper Case</button></label>
			<label><button type="button" class="btn btn-success" onclick="sort()">Sort</button></label>
			<label><button type="button" class="btn" onclick="reverse()">Reverse</button></label>
			<label><button type="button" class="btn btn-info" onclick="trim()">Strip Blank</button></label>
			<label><button type="button" class="btn btn-success" onclick="linenumber()">Add Numbers</button></label>
			<label><button type="button" class="btn btn-danger" onclick="shuffle()">Shuffle</button></label>
		</div>
		
	</div>
	<?php
	include 'foot.php';
	?>

</body>
</html>