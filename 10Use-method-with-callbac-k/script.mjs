
import  * as fs from "node:fs"


let text = "Hello, world!"
    
fs.writeFile("helloWorld.txt", text, (error) => {
    if(error){
            console.log(error)
    } else {
            console.log("text written successfully")
    }
})