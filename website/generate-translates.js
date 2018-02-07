const fs = require("fs");
const path = require("path");
const glob = require("glob");
const {fromJS} = require("immutable");
const config = require("./translation.json");
const languages = require(__dirname + "/" + config["language-config"]);
const defaultLang = "en";

languages.filter(lang => lang.tag !== defaultLang).forEach(function (lang) {
    config.translate.forEach(function (conf) {
        createTarget(conf, lang.tag);
    })
});

function createTarget(config, locale)
{
    let {conflict, source, translation} = config;
    translation = translation.replace(/(%locale%)/g, locale);
    //console.log(translation);

    glob(source, {}, function (err, files) {

        if (err){
            throw `Glob matching failed for ${config.source}`;
        }

        files.forEach(function (file) {
            let targetFile = translation.replace(/(%original_file_name%)/g, file.match(/([^/]+)$/)[1] || file);
            let targetDir = path.dirname(targetFile);
            let suffix = file.match(/\.(\w+)$/)[1];

            if (conflict === "skip"){
                try { //if target file exists keep it
                    fs.statSync(targetFile);
                } catch(e){ //then create new
                    console.log(`File ${targetFile} will be created`);
                    try {
                        fs.statSync(targetDir);
                    } catch(e){
                        fs.mkdirSync(targetDir);
                    }
                    fs.createReadStream(file).pipe(fs.createWriteStream(targetFile));
                }
            }

            if (conflict === "merge") {
                if (suffix !== "json"){
                    throw `Configuration for source ${source} has conflict field = merge, but suffix ${suffix} cannot be merged. Provide skip value to this field instead.`;
                }
                let source_struct = fromJS(require(__dirname + "/" + source));
                let target_struct;

                try {
                    target_struct = source_struct.mergeDeep(fromJS(require(__dirname + "/" + targetFile)));
                    //console.log(JSON.stringify(target_struct.toJS(), null, 4));
                    fs.writeFileSync(targetFile, JSON.stringify(target_struct.toJS(), null, 4));
                } catch(e) {
                    //console.log(JSON.stringify(source_struct.toJS(), null, 4));
                    fs.writeFileSync(targetFile, JSON.stringify(source_struct.toJS(), null, 4));
                }

                //console.log(struct);
            }

            console.log(file + "->" + targetFile);
        });

        console.log(err, files);
    });
}

