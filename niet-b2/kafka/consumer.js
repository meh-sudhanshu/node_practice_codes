

const {kafka} = require("./client")


const group = process.argv[2]


async function init() {
    const consumer = kafka.consumer({
        groupId:group
    })

    await consumer.subscribe({
        topics:[
            "riders-updates"
        ],
        fromBeginning:true
    })
    await consumer.run({
        eachMessage: async ({topic,partition,message})=>{
            console.log("Hi i am your message "+message.value.toString())
        }
    })
}

init()