import * as fs from 'fs';
import * as path from 'path'
const curr_dir = process.cwd();
import * as template from './utils/render.js';
export const writeFiles = async (files_path , fileName) =>{

    const files = fs.readdirSync(files_path);

    files.forEach(file => {
        const cf_path = path.join(files_path , file);

        const cf_stats = fs.statSync(cf_path);

        if(cf_stats.isFile){
            let data = fs.readFileSync(cf_path , 'utf-8');
            data = template.render(data , {fileName});
            const write_path = path.join(fileName , file);
            fs.writeFileSync(write_path , data , 'utf-8');
        }
        else if(cf_stats.isDirectory){
            if(!fs.existsSync(path.join(fileName , file))){
                fs.mkdirSync(path.join(fileName , file));
            }
            writeFiles(path.join(files_path , file) , path.join(fileName , file) );
        }
        
    });



}