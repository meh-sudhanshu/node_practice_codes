



const {kafka} = require("./client")
const group = process.argv[2]




async function  init() {
    const consumer = kafka.consumer({groupId:group}) 
    await consumer.connect()
    consumer.subscribe({
        topics:["rider-updates"],
        fromBeginning:true
    })
   await consumer.run({
    eachMessage : async ({topic,partition,message})=>{
        console.log("heloooooooooooooooooooooooooooooooooooooooooooooooooooooo")
        console.log("heloooooooooooooooooooooooooooooooooooooooooooooooooooooo")
        console.log("heloooooooooooooooooooooooooooooooooooooooooooooooooooooo")
        console.log("heloooooooooooooooooooooooooooooooooooooooooooooooooooooo")
        console.log(message.value.toString())
    }
   })
}

init()