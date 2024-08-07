import inquirer from "inquirer";

import { QUESTIONS } from "./utils/questions.js";



export const promptUser =  async () =>{
    try{
        const answers = await inquirer.prompt(QUESTIONS);

        console.log(answers);
        return answers;
    }
    catch(err){
        console.error(err);
        return null;
    }
}

