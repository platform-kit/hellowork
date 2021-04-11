var axios = require('axios');
require('dotenv').config();
const { Octokit } = require("@octokit/rest");
var base64 = require('js-base64').Base64;

var token = process.env.GITHUB_TOKEN;
var user = process.env.GITHUB_USER;
var repo = process.env.GITHUB_REPO;






// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {

  // Params
  var params = event.queryStringParameters || null;
  if (typeof params.data == 'string') {
    params.data = JSON.parse(params.data);
  }
  const fileName = params.file || 'static/data.json'
  console.log(params);

  //
  const octokit = new Octokit({
    auth: token,
  });
  var sha = null;
  var output = await octokit.rest.repos
    .getContent({
      owner: user,
      repo: repo,
      path: fileName,
    })
    .then(({ data }) => {
      sha = data.sha;
      data = base64.decode(data.content);
      // handle data
      //console.log(data);
     return data;
    });

  // Check password
  var password = false;
  if (params.p == process.env.PASSWORD) {
    password = true;
  }

  var error = null;
  var status = 200;

  // Update the file, if new data is provided & password is correct
  
  if (event.body != null && password == true) {
    
    try {
    var file = await octokit.rest.repos
      .createOrUpdateFileContents({
        owner: user,
        repo: repo,        
        path: fileName,        
        branch: 'main',
        sha: sha,
        message: "Content Updated",
        content: base64.atob(JSON.stringify(JSON.parse(event.body))),
      })
      .then(({ data }) => {
        data = JSON.parse(base64.decode(data.content));
        // handle data
        //console.log(data);
      });
    }
    catch(err) {
      error = err;
      status = 500;
    }          

    
    var message = "Success.";
    if (event.body != null && password == false) {
      status = 500;
      message = "Incorrect Password.";
    }

    var body = null;
    if (event.body != null && event.body != '') {
      console.log(' ---- ');
      console.log(typeof event.body);
      console.log(' ---- ');
      body = JSON.parse(event.body);
    }

    var data = {
      "message": message,
      params: params,
      body: body,
      file: file,
    };

    var output = null;

    if (event.body == null || params.p == null) {
      output = content;
    }

    else {
      output = data;
    }
    
    

    }

    if(typeof output == 'string') {
      output = JSON.parse(output);
    }

    status = 200;
    return {
      statusCode: status,
      error: error,
      body: JSON.stringify(output)
    };
  }