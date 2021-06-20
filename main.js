const quesDivs = document.querySelectorAll('.faq')

quesDivs.forEach((ques) => {
  ques.addEventListener('mouseover',(e) => {
      ques.firstElementChild.style.color = 'hsl(14, 88%, 65%)'
  })
})

quesDivs.forEach((ques) => {
  ques.addEventListener('mouseout',(e) => {
    ques.firstElementChild.style.color = 'hsl(0,0%,0%)'
  })
})

quesDivs.forEach((ques) => {
  ques.addEventListener('click',() => {
    const displayprop = ques.lastElementChild.style.display
    if(!displayprop || displayprop=='none') {
        ques.parentElement.style.width = '350px'
        ques.lastElementChild.style.display = 'block'
    } else {
      ques.lastElementChild.style.display = 'none'
    }

  })
})
