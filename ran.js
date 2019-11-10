const services = require('./service');
var word = undefined;
const randomWord =  function(word,console_data = 1) {
	api_path="randomWord"
	return new Promise((resolve, reject) => {
		services.getDictService(word,api_path).then((data) => {
			if(data.status == 200){
				data = data.body ? data.body.word : [];
			    resolve(data);
			}else
				resolve("Internal Error");
		}).catch(err=>{
			reject(err);
			console.log("Server Error");
		});	
	});
}
module.exports =  {
    randomWord: randomWord
};