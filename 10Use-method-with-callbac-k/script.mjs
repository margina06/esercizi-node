// import { writeFile } from 'node:fs';
import  * as fs from "node:fs"

// fs.writeFile('message.txt', 'Hello Node.js', 'utf8',function (error,date) {
//    if (error) {
//     console.log(error)
//     return
//    } 

//    console.log(date)
// });

fs.writeFile('message.txt','Hello Node.js', {encoding:'utf-8'},function (error,date) {
       if (error) {
        console.error(error)
        return;
       } 
    
       console.log(date)
 
     
    });

    const fs = require("fs");

    let text = "Hello, world!"
    
    fs.writeFile("helloWorld.txt", text, (error) => {
        if(error){
            console.log(error)
        } else {
            console.log("text written successfully")
        }
    })