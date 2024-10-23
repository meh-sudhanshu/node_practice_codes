



const api = "http://universities.hipolabs.com/search?country=United+States"

const response =  fetch(api)

response.then(res=>res.json()).then(data=>{
    console.log(data[0].country)
}).catch(err=>{
    console.log(err)
})


console.log(response)