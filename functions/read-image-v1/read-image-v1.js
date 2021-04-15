var axios = require('axios');
require('dotenv').config();
const { Octokit } = require("@octokit/rest");
var base64 = require('js-base64').Base64;
var token = process.env.GITHUB_TOKEN;
var user = process.env.GITHUB_USER;
var repo = process.env.GITHUB_REPO;
var fs = require('fs');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  
   // Params
   var params = event.queryStringParameters || null;
   if (typeof params.data == 'string') {
     params.data = JSON.parse(params.data);
   }
   const fileName = params.file || 'static/uploads/temp.jpg'
   console.log(params);
 
   //
   const octokit = new Octokit({
     auth: token,
   });
   var sha = null;
   var atob = require('atob');
   var output = await octokit.rest.repos
     .getContent({
       owner: user,
       repo: repo,
       path: fileName,
     })
     .then(({ data }) => {
       sha = data.sha;    
       return data;
     });


  if(params.mode == 'data'){  
  output = 
    {
      statusCode: 200,
      contentType: 'application/json',
      body: JSON.stringify(output)
     };
  }
  else {
    output = 
    {
      statusCode: 200,
      contentType: 'image/jpeg',
      body: output.content,
      isBase64Encoded: true
     };
  }

  return output;
}