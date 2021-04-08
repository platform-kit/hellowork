const replace = require('replace-in-file');

var repo = process.env.REPO;
console.log(repo);

const options = {

    //Single file
    files: 'src/admin/config.yml',

    //Replacement to make (string or regex) 
    from: /replace/g,
    to: repo || 'replace',
};

replace(options)
    .then(changedFiles => {
        console.log('Modified files:', changedFiles.join(', '));
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });