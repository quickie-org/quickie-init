import { type } from "os";
export const QUESTIONS = [

   {
    name : 'pkgName',
    type : 'input' ,
    message : "package-name : " ,
    validate : (input) =>{
        if(!input){
            return "Please Enter Valid Package Name";
        }
        return true;
    },
    

   } ,
    {
        name : 'lang',
        type : 'list' ,
        message : "which one do you wanna use ? " ,
        choices : ["javascript" , "typescript"] ,
        default : "javascript" ,
        
    },
    {
        name : 'db' ,
        type : 'list' ,
        message : 'which database you wanna use ? ' ,
        choices : ['postgresql' , 'mongodb'] ,
        default : 'postgresql',
        
    },
    {
        name : 'prisma' ,
        type :  'confirm',
        message : 'do you wanna use prisma ORM ? ' ,
        when : (ans) => ans.db === 'postgresql' , 
        default : false,
        
    },
    {
        name :  'git',
        type : 'confirm' ,
        message :'initialise this as a git repo' ,
        default : true ,
        
    },
    {
        name : 'npm' ,
        type : 'confirm' ,
        message : 'install the necessary packages ? ' ,
        default : false ,
        
    }
]

