const program = require('commander');
const services = require('./service');
program
  .version('0.0.1')
  .parse(process.argv)
var word = program.args[0];
const antonyms =  function(word,console_data = 1) {
	api_path="relatedWords"
	return new Promise((resolve, reject) => {
		services.getDictService(word,api_path).then((data) => {
			if(data.status == 200){
				data = data.body ? data.body[0].words : [];
			    for(var k in data) {
				   if(console_data == 0)
				   		break;
				   console.log("Antonym ",(parseInt(k)+1),":", data[k]);
				}
				if(!data.length){
					console.log("No Antonym Found!")
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
	antonyms(word);
module.exports =  {
    antonyms: antonyms
};