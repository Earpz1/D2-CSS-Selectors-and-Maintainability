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

  //The below add event listeners onload for later exercises

  const olderButton = document.querySelector('.blog-pagination > a')
  olderButton.setAttribute('onclick', 'removeOldPost()')

  const author = document.querySelectorAll('.blog-post-meta > a')
  for (let i = 0; i < author.length; i++) {
    author[i].setAttribute('onmouseover', 'showAuthor(event)')
  }

  const cardLinks = document.querySelectorAll('.stretched-link')
  for (let i = 0; i < cardLinks.length; i++) {
    cardLinks[i].setAttribute('onclick', 'deleteCard(event)')
  }
}

//End of adding event listeners

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
}

//Write a JavaScript functionality to remove the last Blog Post when the user clicks on the “Older” button
function removeOldPost() {
  let body = document.querySelectorAll('main .blog-post')
  body = body[body.length - 1]

  body.remove()
}

//Write a JavaScript functionality that will create an alert with the name of the author every time the user hovers the mouse on an author’s name
function showAuthor(event) {
  alert('The author of this post is: ' + event.target.innerText)
}

//EXTRA Write a JavaScript functionality that will remove the corresponding parent card from the DOM, upon clicking on their “Continue reading” link

function deleteCard(event) {
  const card = event.currentTarget
  card.parentElement.parentElement.remove()
  console.log(card)
}
