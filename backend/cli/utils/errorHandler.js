
export const errorHandler = (msg , exitCode = 1) =>{
    console.error(msg);
    process.exit();
}
