const program = require('commander');
const services = require('./service');
program
  .version('0.0.1')
  .parse(process.argv)
var word = program.args[0];
const synonyms =  function(word,console_data = 1) {
	api_path="examples"
	return new Promise((resolve, reject) => {
		services.getDictService(word,api_path).then((data) => {
			if(data.status == 200){
				data = data.body ? data.body.examples : [];
			    for(var k in data) {
				   if(console_data == 0)
				   		break;
				   console.log("Synonym ",(parseInt(k)+1),":", data[k].text);
				}
				if(!data.length){
					console.log("No Synonyms Found!")
				}
				resolve(data);
			}else
				console.log(data.body.error ? data.body.error : "Internal Error");
		}).catch(err=>{
			console.log("Server Error");
		});
	});
}
if(word != undefined)
	synonyms(word);
module.exports =  {
    synonyms: synonyms
};