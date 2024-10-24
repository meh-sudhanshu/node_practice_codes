

const fingAverage = ()=>{
    var sum = 0
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    console.log("sum is",sum)
    console.log(arguments.length)
    return (sum)/arguments.length
}

module.exports = fingAverage