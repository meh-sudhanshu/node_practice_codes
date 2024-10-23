



// const api = "http://universities.hipolabs.com/search?country=United+States"


// const getApiData = async ()=>{
//     const response = await fetch(api)
//     const data = await response.json()
//     console.log(data)
// }

// getApiData()

// // const response =  fetch(api)

// // response.then(res=>res.json()).then(data=>{
// //     console.log(data[0].country)
// // }).catch(err=>{
// //     console.log(err)
// // })


// // console.log(response)


//---------------------unspalsh startes

const baseUrl = "https://api.unsplash.com/"
const accessKey = "0to0_B5y7HVLx-fGSigaBCSltEg-1DWGU3bihJDjWrM"
const btn = document.getElementsByClassName('btn')[0]
const api = baseUrl+"/photos/?client_id="+accessKey


const getARandomPhoto = async()=>{
    const res = await fetch(api)
    const data = await res.json()
    const imageLink = (data[0].urls.small)
    const imageElement = document.createElement("img")
    imageElement.src = imageLink
    imageElement.style.width = "300px"
    imageElement.style.height = "300px"
    document.body.appendChild(imageElement)
}



btn.addEventListener('click',getARandomPhoto)

// console.log(api)