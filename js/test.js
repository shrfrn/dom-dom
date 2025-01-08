import dom from './index.js'

// Array

// dom('ul li').map(li => {
//     li.innerText = 'baba'
//     return li
// })

// const evens = dom('li')
//     .filter(li => +li.innerText % 2)
//     .map(li => li.outerHTML)
// const [ elUl ] = dom('ul')
// elUl.innerHTML = evens.join('')

// Events

// const handler = ev => console.log(ev.target.innerText)
// dom('ul li').on('click, mouseenter mouseleave', handler)
// dom('ul li').off('click', handler)

// ClassList

// const elLis = dom('li')
// const elOddLis = dom('li:nth-child(odd)')
// const elEvenLis = dom('li:nth-child(even)')

// elOddLis.addClass('a, b \nc \td, e')
// elOddLis.forEach((el, idx) => console.log(idx, el))
// elEvenLis.forEach((el, idx) => console.log(idx, el))

// elEvenLis.addClass('x y,      z\na\tb')
// elLis.toggleClass('a e x')
// elLis.forEach((el, idx) => console.log(idx, el))