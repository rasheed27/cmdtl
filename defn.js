const program = require('commander');
const services = require('./service');
program
  .version('0.0.1')
  .parse(process.argv)
var word = program.args[0];
const defintions =  function(word,console_data=1) {
	api_path="definitions"
	return new Promise((resolve, reject) => {
		services.getDictService(word,api_path).then((data) => {
			if(data.status == 200){
				data = data.body ? data.body : [];
			    for(var k in data) {
				   if(console_data == 0)
				   		break;
				   console.log("Definition ",(parseInt(k)+1),":", data[k].text);
				}
				if(!data.length){
					console.log("No Defitions Found!")
				}
				
				resolve(data);
			}else
				console.log(data.body.error ? data.body.error : "Internal Error");
		}).catch(err=>{
			console.log(err);
			console.log("Server Error");
		});
	});
}
if(word != undefined)
	defintions(word);
module.exports =  {
    defintions: defintions
};