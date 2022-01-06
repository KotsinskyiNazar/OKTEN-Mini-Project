
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, 
// которая имеет детальную информацию про текущий пост.
let main  = document.getElementById('main')
let url = new URL(location);
let full = url.searchParams.get('full');
let user = JSON.parse(full)
console.log(user)


let name  = document.createElement("h1")
let userName = document.createElement("p")
let email = document.createElement("p")

let addres = document.createElement("div")
let addresStreet = document.createElement("p")
let addresSuite = document.createElement("p")
let addresCity  = document.createElement("p")
let addresZipCode = document.createElement("p")
let addresGeo = document.createElement("p")

let phone = document.createElement("p")
let website  = document.createElement("p")

let company = document.createElement("div")
let companyName = document.createElement("p")
let companyCatchPhrase = document.createElement("p")
let companyBs = document.createElement("p")
let posts = document.createElement("div")


let btnDiv = document.createElement("div")
let btn  = document.createElement("input")


name.innerText = `${user.name} `
userName.innerText = `${"Username : " + user.username}`
email.innerText = `${"Email : " + user.email}`
addresStreet.innerText = `${"Street : " + user.address.street} `
addresSuite.innerText = `${"Suite : " + user.address.suite}`
addresCity.innerText = `${"City : " + user.address.city}`
addresZipCode.innerText = `${"ZipCode : " + user.address.zipcode}`
addresGeo.innerText = `${"LAT : " + user.address.geo.lat + "LNG : " + user.address.geo.lng}`
phone.innerText = `${"Phone number : " + user.phone}`
company.innerText = `${"Website : " + user.website}`
companyName.innerText =`${"Name : " + user.company.name}`
companyCatchPhrase.innerText = `${"Catch Phrase : " + user.company.catchPhrase}`
companyBs.innerText = `${"BS : " + user.company.bs}`

btn.value = `Click for posts of user`

btn.style = "width : 90%;text-align:center"
btnDiv.style = "display:flex;justify-content:center;background-color:red;"
main.style = "background-color:pink;"
btn.type  = "button"
posts.id = "posts"
btn.onclick = postClick

main.appendChild(name)
main.appendChild(email)
main.appendChild(userName)
main.appendChild(phone)
main.appendChild(website)

main.appendChild(addres)
addres.appendChild(addresStreet)
addres.appendChild(addresSuite)
addres.appendChild(addresCity)
addres.appendChild(addresZipCode)
addres.appendChild(addresGeo)

main.appendChild(company)
company.appendChild(companyName)
company.appendChild(companyCatchPhrase)
company.appendChild(companyBs)

main.appendChild(btnDiv)
btnDiv.appendChild(btn)
main.appendChild(posts)


function postClick(){
    fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${user.id}`)
    .then(response => response.json())
    .then(posts =>{
        for (const post of posts) {

            let postsBody = document.getElementById("posts")
            let postInfo = document.createElement("div")
            let postTitle = document.createElement("p")
            let moreInfo = document.createElement("a")


            postInfo.style = "width:18%;margin:10px;background-color:yellow;"
            postsBody.style = "display:flex;flex-wrap:wrap;background-color:blue;justify-content:center;"
        
            
            postTitle.innerText = "Post number " + post.id + " : " + post.title
            moreInfo.innerText = "Click for more info about post"
            moreInfo.href = `post-details.html?full=${JSON.stringify(post)}`


       

            postsBody.appendChild(postInfo)
            postInfo.appendChild(postTitle)
            postInfo.appendChild(moreInfo)

        }
    })
}