// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
//     - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let main  = document.getElementById('main')
let url = new URL(location);
let full = url.searchParams.get('full');
let post = JSON.parse(full)
console.log(post)







let postTitle = document.createElement("h4")
let postBody = document.createElement("p")
let postComment  = document.createElement("h4")
let commentSection = document.createElement("div")

commentSection.style = "display:flex;flex-wrap:wrap;margin-10px;padding:10px;justify-content:center;background-color:yellow"
main.style = "background-color:pink"

postTitle.innerText = "Title : " + post.title
postBody.innerText = "Post : " + post.body
postComment.innerText = "Comments about post"

main.appendChild(postTitle)
main.appendChild(postBody)
main.appendChild(postComment)
main.appendChild(commentSection)


fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${post.id}`)
    .then(response => response.json())
    .then(comments =>{


for (const comment of comments) {
    
   
    let  name = document.createElement("p")
    let email = document.createElement("p")
    let commentBody = document.createElement("p")
    let str = document.createElement("p")
    let commentDiv = document.createElement("div")

    commentDiv.style = "background-color:red;width:22%;margin:10px"

    name.innerText = "Comentator : " + comment.name
    email.innerText = "Email : " + comment.email
    commentBody.innerText = "Comment : " + comment.body
    // str.innerText = "----------------------------------------------------------------------------------------------------------------"

    commentSection.appendChild(commentDiv)
    commentDiv.appendChild(name)
    commentDiv.appendChild(email)
    commentDiv.appendChild(commentBody)
    // commentDiv.appendChild(str)
}



    })