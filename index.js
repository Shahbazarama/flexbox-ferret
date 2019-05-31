document.addEventListener('DOMContentLoaded', function(e){
  let codeSubmit = document.querySelector('#codeSubmit')
  let lineOfCode = document.querySelector('#lineOfCode')

  let ferretImage = document.querySelector('#ferretImage')
  let rightSide = document.querySelector('.rightSide')
  function testFerretLand(codeToTest){
    console.log('hit')
    rightSide.setAttribute("style", codeToTest)
  }


  codeSubmit.addEventListener('click', function(e){
    e.preventDefault();

    // send code to test in ferretLand
    testFerretLand(lineOfCode.value)
    lineOfCode.value = ''
  })
})
