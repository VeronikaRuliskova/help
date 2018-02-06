const fs = require("fs");
const glob = require("glob");
const {fromJS} = require("immutable");
const config = require("./translation.json");
const languages = require(__dirname + "/" + config["language-config"]);

//createTarget(config.translate[0], "cs");
//createTarget(config.translate[1], "cs");
createTarget(config.translate[2], "cs");

function createTarget(config, locale)
{
    let {conflict, source, translation} = config;
    translation = translation.replace(/(%locale%)/g, locale);
    console.log(translation);

    glob(source, {}, function (err, files) {

        if (err){
            throw `Glob matching failed for ${config.source}`;
        }

        files.forEach(function (file) {
            let targetFile = translation.replace(/(%original_file_name%)/g, file.match(/([^/]+)$/)[1] || file);
            let suffix = file.match(/\.(\w+)$/)[1];

            if (conflict === "skip"){ //if target file exists keep it
                try {
                    fs.statSync(targetFile);
                } catch(e){
                    console.log(`File ${targetFile} will be created`);
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
                    console.log(JSON.stringify(target_struct.toJS(), null, 4));
                    //fs.writeFileSync(targetFile, JSON.stringify(target_struct.toJS(), null, 4));
                } catch(e) {
                    console.log(JSON.stringify(source_struct.toJS(), null, 4));
                    //fs.writeFileSync(targetFile, JSON.stringify(source_struct.toJS(), null, 4));
                }

                //console.log(struct);
            }

            console.log(file + "->" + targetFile);
        });

        console.log(err, files);
    });
}

