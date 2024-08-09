// ---------------- import statements -----------------------//
import * as path from 'path';
import * as fs from 'fs'
import { errorHandler } from './utils/errorHandler';


// ---------------- mkdir function -----------------------//

const CURRENT_DIR = process.cwd();

export const mkdir = async (pkgName) =>{
    try{
    const dirName = path.join(CURRENT_DIR , pkgName);
    //console.log(dirName);
    if(!dirName) return ;
    fs.mkdirSync(dirName); 
    
    return dirName;
    }
    catch(err){
        errorHandler(`OOPSS....${err}`);
    }
}

