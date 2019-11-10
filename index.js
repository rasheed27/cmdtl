const program = require('commander');
defn = require('./defn');
const syn = require('./syn');
const ant = require('./ant');
const ex = require('./ex');
const ran = require('./ran');
program
  .version('0.0.1')
  .parse(process.argv)
var word = program.args[0] ? program.args[0] : "";
if(word ==""){
	async function fn() {
		console.log("Getting Random Word");
  		const words = await ran.randomWord(word);
  		console.log("Defintions");
  		await defn.defintions(words)
  		console.log("-----------------");
  		console.log("Synonyms");
		await syn.synonyms(words)
  		console.log("-----------------");
		console.log("Antonyms");
		await ant.antonyms(words)
  		console.log("-----------------");
		console.log("Examples");
		await ex.examples(words)
  		return true;
	}
	console.log(fn().then(data=>{}));
}else{
	async function fn() {
  		const words = word;
  		console.log("Defintions");
  		await defn.defintions(words)
  		console.log("-----------------");
  		console.log("Synonyms");
		await syn.synonyms(words)
  		console.log("-----------------");
		console.log("Antonyms");
		await ant.antonyms(words)
  		console.log("-----------------");
		console.log("Examples");
		await ex.examples(words)
  		return true;
	}
	console.log(fn().then(data=>{}));
}