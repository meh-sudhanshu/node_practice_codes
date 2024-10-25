


const {kafka} = require("./client")
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})


async function init() {
    const producer  = kafka.producer();
    console.log("producer initiated !!")
    await producer.connect()
    rl.setPrompt("------------------>")
    rl.prompt()

    var location = "1"
    rl.on("line",async function  (line) {
            await producer.send({
                topic:"rider-updates",
                messages:[
                    {
                        partition:location === "north" ? 1 : 0,
                        key:"updated-location",
                        value:JSON.stringify({name:"zomato-rider",location})
                    }
                ]
            }).on("close",async()=>{
                await producer.disconnect()
            })        
    })
}

init()