document.getElementById('title')
document.getElementById('title').id
document.getElementById('title').className
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class', 'test')

const item = document.getElementById('title')
item.style.backgroundColor = "green"

item.innerText // display text
item.textContent // also display display: none text or element
item.innerHTML // also display tags


document.querySelector('h1') //give first h1 of page
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type = "password"] ')


document.querySelector('p:first-child')
document.querySelectorAll('li')  // NodeList(3) [li, li, li]

const templist = document.querySelectorAll('li')
templist.style.backgroundColor = "green"//nodelist and htmlcollection are not pure array

templist[0].style.backgroundColor = "green"

templist.forEach( function (l){
    l.style.backgroundColor = "green"
} )

// Nodelist only have for each method for completing task
// htmlcollection need to be converted to array to perform operations
const tempclasslist = document.querySelectorAll('.list-item')

const convertedArray = Array.from(tempclasslist)

convertedArray.map((kuchto) =>{
    kuchto.style.backgroundColor = "red"
})