



const fs = require("fs")

// const content = "This is a hardcoded string content !!"

// try{
//     fs.writeFileSync("text.txt",content)
// }catch(err){
//     console.log(err)
// }



// const newContent = "\nThis is a new data coming through sync operation !!"
// fs.writeFile("text.txt",newContent,(err)=>{
//     console.log(err)
// })


// try{
//     const data = fs.readFileSync("text.txt")
//     console.log(data.toString())
// }catch(err){
//     console.log(err)
// }
// fs.readFile("text.txt",(err,info)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(info.toString())
//     }
// })

//console.log("This is present after my write file operation !!")


// fs.appendFile("text.txt","\nthis is a new data",(err)=>{
//     console.log(err)
// })

// try{
//     fs.appendFileSync("text.txt","\nnew new new !!")
// }catch(err){
//     console.log(err)
// }

fs.unlink("text.txt",(err)=>{
    console.log(err)
})