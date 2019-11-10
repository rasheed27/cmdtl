const https = require("https");
const dotenv = require('dotenv');
dotenv.config();
const api_key = process.env.API_KEY;
let getDictService =  function(word,api_path) {
    var sub_path = (word != undefined && word != "") ? "/word/"+word+"/"+api_path : "/words/"+api_path
    var options = {
            hostname: 'fourtytwowords.herokuapp.com',
            port: 443,
            path: sub_path+"?api_key="+api_key,
            method: 'GET'
        }
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            var body = [];
            res.on('data', function(chunk) {
                body.push(chunk);
            });
            res.on('end', function() {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch(e) {
                    reject(e);
                }

                resolve({body,status:res.statusCode});
            });
        });
        req.on('error', (e) => {
          reject(e.message);
        });
        // send the request
        req.end();
    });
};
module.exports =  {
    getDictService: getDictService
};