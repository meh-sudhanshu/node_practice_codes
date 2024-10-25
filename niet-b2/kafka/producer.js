


const {kafka} = require("./client")
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

async function  init() {
    const producer = kafka.producer()
    console.log("Connecting to the producer")
    await producer.connect()
    rl.setPrompt("_--------------------------------------------------")
    rl.prompt()
    const location = "north"
    rl.on(
        "line", async function (line) {
            producer.send({
                topic:"rider-updates",
                messages:[{
                    partition: location ==='north' ? 1 : 0,
                    key:"location-update",
                    value:"Hello this is my location !!"
                }]
            })
        }
    ).on("close", async ()=>{
        await producer.disconnect()
    })

}

init()