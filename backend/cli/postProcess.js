// ---------------- import statements -----------------------//
import * as fs from 'fs';
import shell from 'shelljs';
import { errorHandler } from './utils/errorHandler';
// -----------------  postprocess-function  ------------------------ //
export const PostProcess = async (prisma , git , npm , user_path) =>{
    if(npm){
        try{
        if(fs.existsSync(user_path , 'package.json')){
            shell.cd(user_path);
            shell.exec('npm install');
        }
        else{
            console.log(`ERR:404 Can't Find "package.json" at user folder`);
        }
        }
        catch(err){
            errorHandler(err);
        }
        
    }
    if(git){
        try{
        shell.cd(user_path);
        shell.exec('git init');
        }
        catch(err){
            errorHandler(err);
        }
    }
    if(prisma){
        try{
        shell.cd(user_path);
        shell.exec('npx prisma init --datasource-provider postgresql');
        }
        catch(err){
            errorHandler(err);
        }
    }


}