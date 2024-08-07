#!/usr/bin/env node
import path from 'path';
import * as fs from 'fs';
import { renderTitle } from '../cli/utils/renderTitle.js';
import { promptUser } from '../cli/promptUser.js';
import { mkdir } from '../cli/mkdir.js';
import { writeFiles } from '../cli/writefiles.js';
const CURRENT_DIR = process.cwd();

await renderTitle();

const answers = await promptUser();
if(answers === null){
    console.log(`some error`);
}
const {pkgName , lang , db , prisma , git , npm} = answers;

await mkdir(pkgName);
let template_path = "";
if(lang === 'javascript'){

    if(db === 'postgresql'){
        template_path = path.join('templates' , 'javascript+postgresql');
        console.log(template_path);
    }
    else{
        template_path = path.join('templates' , 'javascript+mongodb');
        console.log(template_path);
    }
}
else{
if(db === 'postgresql'){
        template_path = path.join('templates' , 'typescript+postgresql');
        console.log(template_path);
    }
    else{
        template_path = path.join('templates' , 'typescript+mongodb');
        console.log(template_path);
    }

}

await writeFiles(template_path , pkgName);


















