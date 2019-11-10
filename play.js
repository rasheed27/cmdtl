const program = require('commander');
defn = require('./defn');
const syn = require('./syn');
const ant = require('./ant');
const ex = require('./ex');
const ran = require('./ran');
program
  .version('0.0.1')
  .parse(process.argv)
this.randword = ""; 
async function fn() {
	console.log("Getting Random Word");
	this.randword = await ran.randomWord(undefined);
	// console.log(this.randword);
	this.defns = await defn.defintions(this.randword,0)
	console.log("-----------------");
	console.log("Definition :", this.defns[0].text);
	this.syns = await syn.synonyms(this.randword,0)
	console.log("Synonym :", this.syns[0].text);
	console.log("-----------------");
	this.ants = await ant.antonyms(this.randword,0)
	console.log("Antonym :", this.ants[0]);
	console.log("-----------------");
	return true;
}
fn().then(data=>{
	const readline = require("readline");
	const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
	});


var recursiveQuestion = function () {
	rl.question("Enter your answer? ", function(answer) {
	    if(answer == this.randword)
	    	rl.close();
	    else{
	    	wrorngComands();
	    }
	});
	rl.on("close", function() {
	    console.log("\nBYE BYE !!!");
	    process.exit(0);
	});	
}


var wrorngComands = function () {
	rl.question("Available Chocies \n(1)Try again \n(2)Hint \n(3)Quit \nChoose any one choice :", function(answer) {
	    console.log(answer);
	    answer = answer.trim()
	    if(answer ==  "1")
	    	recursiveQuestion();
	    else if(answer ==  "2"){
				hints().then(data=>{});
	    }else if(answer ==  "3"){
        	displayAll().then(data=>{
	        	rl.close();
        	})
    	}else
    		recursiveQuestion();
	    
    	
	});
	rl.on("close", function() {
	    console.log("\nBYE BYE !!!");
	    process.exit(0);
	});	
}
	recursiveQuestion();
});

async function displayAll() {
	const words = this.randword;
	console.log("Answer is "+words);
	console.log("-----------------");
	console.log("Defintions");

	for(var k in this.defns) {
	   console.log("Definition ",(parseInt(k)+1),":", this.defns[k].text);
	}
	console.log("-----------------");
	console.log("Synonyms");
	for(var k in this.syns) {
	   console.log("Synonym ",(parseInt(k)+1),":", this.syns[k].text);
	}
	console.log("-----------------");
	console.log("Antonyms");
	for(var k in this.ants) {
	   console.log("Antonym ",(parseInt(k)+1),":", this.ants[k]);
	}
	console.log("-----------------");
	console.log("Examples");
	for(var k in this.syns) {
	   console.log("Example ",(parseInt(k)+1),":", this.syns[k].text);
	}
	return true;
	
}

async function hints() {
	console.log("Check Below Hints")
	console.log(this.randword.split('').sort(function(){return 0.5-Math.random()}).join(''));
	console.log(this.randword.split('').sort(function(){return 0.5-Math.random()}).join(''));
	console.log(this.randword.split('').sort(function(){return 0.5-Math.random()}).join(''));
	const words = this.randword;
	console.log("-----------------");
	console.log("Another definition :", this.defns[1].text);
	console.log("-----------------");
	console.log("Another synonym :", this.syns[1].text);
	console.log("-----------------");
	console.log("Another antonym :", this.ants[1]);
	recursiveQuestion()
	return true;
}