require('dotenv').config();
const { Octokit } = require("@octokit/rest");
var token = process.env.GITHUB_TOKEN;
var user = process.env.GITHUB_USER;
var repo = process.env.GITHUB_REPO;

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {

  console.log('\n\n----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----\n\n');

  // Params
  var params = event.queryStringParameters || null;
  if (typeof params.data == 'string') {
    params.data = JSON.parse(params.data);
  }
  
  var fileName = 'static/uploads/temp.jpg';

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
      data = data;
      // handle data
      //console.log(data);
      return data;
    });

    console.log(output);

  // Check password
  var password = false;
  if (params.p == process.env.PASSWORD) {
    password = true;
  }

  var error = null;
  var status = 200;

  
  // Update the file, if new data is provided & password is correct
  if (event.body != null && password == true) {       
    bin = JSON.parse(event.body).contents;    
    console.log(bin);
    if(params.file != null){
      fileName = 'static/uploads/' + params.file;
    }
    console.log(fileName);
    var file = await octokit.rest.repos
      .createOrUpdateFileContents({
        owner: user,
        repo: repo, 
        path: fileName,
        branch: 'main',
        sha: sha,
        message: "Content Updated",
        content: bin,
        encoding: "base64"
      })
      .then(({ data }) => {        
        // handle data
        //console.log(data);
        return data;
      });
    }
  

  output = JSON.stringify(output);


  status = 200;
  return {
    headers: {"content-type": "application/json"},
    statusCode: status,
    error: error,
    body: output
  };
}