// Write a JavaScript functionality to add a new link into the navbar

function addNewList() {
  const nav = document.getElementsByTagName('NAV')[0]
  const newLink = document.createElement('span')
  newLink.innerText = 'New Link'
  nav.appendChild(newLink)
}

//Write a JavaScript functionality to change the color of the main heading title

function changeHeading() {
  const heading = document.getElementsByTagName('h1')[0]
  heading.style.color = 'red'
}

// Write a JavaScript functionality to change the background of the jumbotron
function changeJumboBackground() {
  const jumbotron = document.getElementsByClassName('jumbotron')
  jumbotron[0].style.backgroundColor = 'green'
}

//Write a JavaScript functionality to remove the “twitter” link under the “Elsewhere” section in the aside element. It should happen when the page loads, automatically
window.onload = function () {
  const list = document.getElementsByTagName('ol')[2]
  const twitter = list.getElementsByTagName('li')[1]

  list.removeChild(twitter)
}

//Write a JavaScript functionality to remove the first 50 characters in the first paragraph for every blog post

function removeFirst50() {
  const blogPosts = document.querySelectorAll('.blog-post p:nth-child(3)')
  for (let i = 0; i < blogPosts.length; i++) {
    let text = blogPosts[i].innerText
    blogPosts[i].innerText = text.slice(50)
  }
}

//Write a JavaScript functionality to add a new Blog Post (div with title and text)

function addNewPost() {
  let body = document.querySelectorAll('.blog-post')[0]

  let blogTitle = document.createElement('h2')
  let content = document.createElement('p')

  blogTitle.classList.add('blog-post-title')
  blogTitle.innerHTML = 'This is a new blog post'

  content.innerHTML = 'This is the content of the new blog post'

  body.prepend(content)
  body.prepend(blogTitle)

  console.log(body)
}
