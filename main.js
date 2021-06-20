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

    const icon = ques.firstElementChild.lastElementChild
    const displayprop = ques.lastElementChild.style.display
    if(!displayprop || displayprop=='none') {
        ques.parentElement.style.width = '350px'
        ques.firstElementChild.style.fontWeight='bold'
        ques.lastElementChild.style.color = 'hsl(240, 6%, 50%)';
        ques.lastElementChild.style.display = 'block'
        icon.style.transform = 'scaleY(-1)'
    } else {
      ques.firstElementChild.style.fontWeight='normal'
      ques.lastElementChild.style.display = 'none'
      icon.style.transform = 'scaleY(1)'
    }

  })
})
