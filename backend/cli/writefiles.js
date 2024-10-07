// ---------------- import statements -----------------------//
import * as fs from 'fs';
import * as path from 'path'
import * as template from './utils/render.js';
import { errorHandler } from './utils/errorHandler.js';
// ---------------- write-files function -----------------------//
export const writeFiles = async (files_path , fileName) =>{
    try{
    if(fs.existsSync(files_path)){
    const files = fs.readdirSync(files_path);

    files.forEach(file => {
        const cf_path = path.join(files_path , file);

        const cf_stats = fs.statSync(cf_path);

        if(cf_stats.isFile()){
            try{
            let data = fs.readFileSync(cf_path , 'utf-8');
            data = template.render(data , {fileName});
            const write_path = path.join(fileName , file);
            fs.writeFileSync(write_path , data , 'utf-8');
            }
            catch(err){

                errorHandler(`OPPAI ${err} `);
            }
        }
        else if(cf_stats.isDirectory()){
            try{
            if(!fs.existsSync(path.join(fileName , file))){
                fs.mkdirSync(path.join(fileName , file));
            }
            writeFiles(path.join(files_path , file) , path.join(fileName , file) );


            }
            catch(err){
                errorHandler(`OPPAI ${err} `);
            }
        }

    
        
    });

}
else{
    console.log(`SORRY TEMPLATE NOT AVAILABLE`);
    return;
}
    }
    catch(err){
        errorHandler(`OOPS>>> ${err}`);

    }



}
