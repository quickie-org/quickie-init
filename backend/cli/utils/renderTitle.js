import figlet from "figlet";
import { promisify } from "util";
import gradient from "gradient-string";


const f = promisify(figlet.text);


export const renderTitle = async () =>{
    try {
    const data = await f('QUICKIE', {
      font: '3D Diagonal',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 'default',
      whitespaceBreak: true,
    });
    console.log(gradient.vice.multiline(data));
  } catch (err) {
    console.log('Something went wrong...');
    console.dir(err);
  }
}

