"use strict";

const fs = require("fs");
const { exec } = require("child_process");

const regexp = /.+\?.+:.+\?:.+;/;

const script = fs.readFileSync(process.argv[2], "utf8");

const quaternary_operator = script.match(regexp)[0].trim();

const splited = quaternary_operator.split(" ");

const reinsert = `
if(${splited[0]} === true){
    return ${splited[2]};
}else if(${splited[0]} === false){
    return ${splited[4]};
}else{
    return ${splited[6]}
}
`

const exec_script = script.replace(regexp, reinsert);

eval(exec_script);
