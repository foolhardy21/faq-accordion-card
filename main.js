const quesDivs = document.querySelectorAll('.faq')

quesDivs.forEach((ques) => {
  ques.addEventListener('mouseover',(e) => {
      ques.style.color = 'hsl(14, 88%, 65%)'

  })
})

quesDivs.forEach((ques) => {
  ques.addEventListener('mouseout',(e) => {
    ques.style.color = 'hsl(0,0%,0%)'
  })
})
