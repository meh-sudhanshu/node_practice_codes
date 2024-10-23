



// const url = "https://wttr.in/London?format=j1"
// const headers = {
//     'Accept': 'text/html',
//     'Content-Type': 'text/html',
// }



// const getDataFromApi = async ()=>{
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// getDataFromApi()

// // const response = fetch(url)
// // response.then(res=> res.json()).then((data)=>{
// //     console.log(data)
// // }).catch((err)=>{
// //     console.log(err)
// // })



//  unspalsh started ---------------------------



const baseUrl = "https://api.unsplash.com/"
const accessKey = "U0yUIBF6JLuW1KIyz2Z9Fqd3ZZWLHzY3QjfCVsRAEBo"
const accessKeyString = "?client_id="+accessKey

const api = baseUrl+"/photos/"+accessKeyString


const getARandomPhoto = async ()=>{
    const response = await fetch(api)
    const data = await response.json()
    const imageLink = (data[0].links.self)
    const imageResponse = await fetch(imageLink+"/?client_id="+accessKey)
    const image = await imageResponse.json()
    console.log(image.urls.full)
}

getARandomPhoto()