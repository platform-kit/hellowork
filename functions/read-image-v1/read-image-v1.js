require('dotenv').config();
const { Octokit } = require("@octokit/rest");
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
  const fileName = params.file || 'static/uploads/temp.jpg'
  console.log(params);

  //
  const octokit = new Octokit({
    auth: token,
  });
  var sha = null;
  var output = null;
  var atob = require('atob');
  
  if (params.mode == 'data') {
    output = await octokit.rest.repos
    .getContent({
      owner: user,
      repo: repo,
      path: fileName,
    })
    .then(({ data }) => {
      sha = data.sha;
      return data;
    });
    output =
    {
      statusCode: 200,
      contentType: 'application/json',
      body: JSON.stringify(output)
    };
  }
  else {
    
    output = await octokit.rest.repos    
    .getContent({
      owner: user,
      repo: repo,
      path: fileName,
    })
    .then(({ data }) => {
      sha = data.sha;
      return data;
    });

    console.log('------' + sha + '-----');
    
    /* output = await octokit.rest.git.getBlob({
      owner: user,
      repo: repo,
      sha: sha,
    }); */

    var sha = output.sha;

    var blob = await octokit.request('GET /repos/{owner}/{repo}/git/blobs/' + sha, {
      owner: user,
      repo: repo,
      file_sha: sha
    });

    console.log(blob);

    output =
    {
      statusCode: 200,
      contentType: 'image/png',
      body: blob.data.content,
      isBase64Encoded: true
    };
  }

  return output;
}