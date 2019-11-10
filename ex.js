const program = require('commander');
const services = require('./service');
program
  .version('0.0.1')
  .parse(process.argv)
var word = program.args[0];
const examples =  function(word,api_path="examples") {
	return new Promise((resolve, reject) => {
		services.getDictService(word,api_path).then((data) => {
			if(data.status == 200){
				data = data.body ? data.body.examples : [];
			    for(var k in data) {
				   console.log("Example ",(parseInt(k)+1),":", data[k].text);
				}
				if(!data.length){
					console.log("No Examples Found!")
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
	examples(word);
module.exports =  {
    examples: examples
};