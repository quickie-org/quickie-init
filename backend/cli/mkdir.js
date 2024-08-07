import * as path from 'path';
import * as fs from 'fs'


const CURRENT_DIR = process.cwd();

export const mkdir = async (pkgName) =>{
    const dirName = path.join(CURRENT_DIR , pkgName);
    console.log(dirName);
    if(!dirName) return ;
    fs.mkdirSync(dirName); 
}

