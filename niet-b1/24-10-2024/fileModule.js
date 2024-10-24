

const fs = require("fs")
const content = "Hi this is a new new new  static content being written to the file !!"

// fs.writeFile("test.txt",content,(err)=>{
//     console.log("err",err)
// })


// try{
//     fs.writeFileSync("test1.txt",content,'utf-8')
// }catch(err){
//     console.log(err)
// }


// fs.readFile("test.txt",(err,info)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(info.toString())
//     }
// })

const newContent = "\nThis data should come in a new line"

fs.appendFile("test.txt",newContent,(err)=>{
    console.log(err)
})


console.log("This statement is resent after the write file operation !")