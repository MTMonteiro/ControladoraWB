var SVGO = require('svgo')
var config = require('./config.json')
var FS = require('fs')
var PATH = require('path')

const PATH_SVG = "./content/"
const PATH_SVG_RESULT = "./results/svgo/"
const directoryPath = PATH.join(__dirname, PATH_SVG);

const readFiles = new Promise( (resolve, reject) => FS.readdir(directoryPath, function (err, files) {
    if (err) {
        reject(('Unable to scan directory: ' + err))
    }
    const result = []
    files.forEach(function (file) {
        if(/([a-zA-Z0-9\s_\\.\-\(\):])+(.svg)$/.test(file))
        result.push(file)
    });
    resolve(result)
}))

readFiles
    .then( files =>{

        var svgo = new SVGO(config);

        files.forEach(function (file) {
            var filepath = PATH.resolve(__dirname, PATH_SVG + file)
            FS.readFile(filepath, 'utf8', function (err, data) {
                if (err) {
                    throw err;
                }
                svgo
                    .optimize(data, {path: filepath})
                    .then(function (result) {

                        result.data = result.data.replace('xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"',"")
                        result.data = result.data.replace('osb:paint="solid"',"")

                        var writefilepath = PATH.resolve(__dirname, PATH_SVG_RESULT + file)
                        FS.writeFile(writefilepath,result.data,function(error){
                            if(error)
                                console.log(error)
                            else
                                console.log('criado file svgo/' + file)
                        })
                    });

            });
        })
    })
    .catch( error => console.err(error))

