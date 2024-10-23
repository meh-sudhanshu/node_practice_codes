



const url = "https://wttr.in/London?format=j1"
const headers = {
    'Accept': 'text/html',
    'Content-Type': 'text/html',
}


for(var i = 0;i < 10; i++){
    const response = fetch(url)
response.then(res=> res.json()).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
}