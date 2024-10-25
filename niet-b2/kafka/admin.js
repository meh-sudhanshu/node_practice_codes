const {kafka} = require("./client")


async function init() {
    const admin = kafka.admin()
    console.log("Admin initiated ----")
    admin.connect()
    console.log("Admin connected ---------")

    await admin.createTopics({
        topics:[
            {
                topic:"rider-updates",
                numPartitions: 2
            }
        ]
    })
    console.log("topics created successfully !!")
    await admin.disconnect()
    console.log("admin disconnected !!")
}

init()