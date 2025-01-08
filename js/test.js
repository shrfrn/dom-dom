import dom from './index.js'

// Array
const selector = document.querySelectorAll('li')
// const selector = 'li'
// const selector = document.querySelectorAll('ul li')


// dom(selector).map(li => {
//     li.innerText = 'baba'
//     return li
// })

// const evens = dom(selector)
//     .filter(li => +li.innerText % 2)
//     .map(li => li.outerHTML)
// const [ elUl ] = dom('ul')
// elUl.innerHTML = evens.join('')

// Events

// const handler = ev => console.log(ev.target.innerText)
// dom(selector).on('click, mouseenter mouseleave', handler)
// dom(selector).off('click', handler)

// ClassList

// const elLis = dom(selector)
// const elOddLis = dom('li:nth-child(odd)')
// const elEvenLis = dom('li:nth-child(even)')

// elOddLis.addClass('a, b \nc \td, e')
// elOddLis.forEach((el, idx) => console.log(idx, el))
// elEvenLis.forEach((el, idx) => console.log(idx, el))

// elEvenLis.addClass('x y,      z\na\tb')
// elLis.toggleClass('a e x')
// elLis.forEach((el, idx) => console.log(idx, el))

// Chaining

// const handler = ev => console.log(ev.target.innerText)
// const elLis = dom(selector)
// elLis
//     .addClass('a b,c')
//     .attr('title', 'baba')
//     .attr('data-i', 1)
//     .on('click mouseenter', handler)
//     .off('mouseenter', handler)

// elLis.forEach((el, idx) => console.log(idx, el))