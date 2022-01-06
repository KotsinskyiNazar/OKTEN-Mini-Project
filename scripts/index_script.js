// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, 
// которая имеет детальную информацию про объект на который кликнули
let main = document.getElementById("main")

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users =>{
    for (const user of users) {
        let id = document.createElement("p")
        let name = document.createElement("p")
        let section = document.createElement("section")
        let moreInfo = document.createElement("a")
        let divInfo = document.createElement("div")
        main.style = "display:flex;flex-wrap:wrap;justify-content:center;"
        section.style =
         "background-color : red;width : 46%;height : 200px;justify-content:center;margin:15px"  
        divInfo.style = "display:flex;flex-direction:column;background-color:yellow"
        
        
        id.innerText = "Id : " + user.id
        name.innerText = "Name : " + user.name
        moreInfo.innerText = "Click for more info"
        moreInfo.href = `user-details.html?full=${JSON.stringify(user)}`
        
        main.appendChild(section)
        section.appendChild(divInfo)
        divInfo.appendChild(id)
        divInfo.appendChild(name)
        divInfo.appendChild(moreInfo)
       
    }

})