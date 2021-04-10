var gitorm = require('gitorm');
var axios = require('axios');
require('dotenv').config();
var base64 = require('js-base64').Base64;

var token = process.env.GITHUB_TOKEN;
var user = process.env.GITHUB_USER;
var repo = process.env.GITHUB_REPO;



// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  
  var params = event.queryStringParameters || null;

  if (typeof params.data == 'string') {
    params.data = JSON.parse(params.data);
  }

  console.log(params);

  // Initialize Gitorm
  const Gitorm = new gitorm({
    token: token,
    repository: repo,
    owner: user
  });

  // Initialize Gitorm
  const fileName = params.file || 'static/data.json'
  await Gitorm.connect();
  console.log(Gitorm.status);

  // Check password
  var password = false;
  if(params.p == process.env.PASSWORD) {
    password = true;
  }
  
  // Update the file
  if(event.body != null && password == true){ 
    const updatedFile = await Gitorm.update({
      data: JSON.stringify(JSON.parse(event.body)),
      path: `${fileName}`
    });
  }

  // Read the file
  const file = await Gitorm.find({
    path: `${fileName}`
  });  
  console.log(file);

  var content = '';

  // Make a request for a user with a given ID
  await axios.get(file.url)
    .then(function (response) {
      // handle success
      console.log(response);
      content = JSON.parse(base64.decode(response.data.content));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed

    });

  file.content = content;
  var status = 200;
  var message = "Success.";  
  if(event.body != null && password == false){
    status = 500;
    message = "Incorrect Password.";
  }

  var body = null;
  if(event.body != null && event.body != ''){
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

  if(event.body == null){
    output = content;
  }

  else {
    output = data;
  }

  return {
    statusCode: status,
    body: JSON.stringify(output)
  };
}