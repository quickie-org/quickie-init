#!/usr/bin/env node
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { PostProcess } from '../cli/postProcess.js';
import { renderTitle } from '../cli/utils/renderTitle.js';
import { promptUser } from '../cli/promptUser.js';
import { mkdir } from '../cli/mkdir.js';
import { writeFiles } from '../cli/writefiles.js';
import { dirname } from 'path';
import { errorHandler } from '../cli/utils/errorHandler.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __parent_dir = resolve(__dirname , '..');

try{


await renderTitle();

const answers = await promptUser();
if(answers === null){
    errorHandler('answers not provided correctly');
}
const {pkgName , lang , db , prisma , git , npm} = answers;

const user_path = await mkdir(pkgName);
let template_path = "";
if(lang === 'javascript'){

    if(db === 'postgresql'){
        template_path = path.join(__parent_dir , 'templates' , 'javascript+postgresql');
        console.log(`template-path  ${template_path}`);
    }
    else{
        template_path = path.join(__parent_dir , 'templates' , 'javascript+mongodb');
        console.log(`template-path  ${template_path}`);
    }
}
else{
if(db === 'postgresql'){
        template_path = path.join(__parent_dir , 'templates' , 'typescript+postgresql');
        console.log(`template-path  ${template_path}`);

    }
    else{
        template_path = path.join(__parent_dir , 'templates' , 'typescript+mongodb');
        console.log(`template-path  ${template_path}`);
    }

}


await writeFiles(template_path , pkgName);

await PostProcess(prisma , git , npm  , user_path);


}
catch(err){
    errorHandler('some error occured');
}





 


















