document.addEventListener('DOMContentLoaded', function(e){
  let codeSubmit = document.querySelector('#codeSubmit')
  let lineOfCode = document.querySelector('#lineOfCode')

  let ferretLand = document.querySelector('.ferretLand')

  function testFerretLand(codeToTest){
    let propertyName = codeToTest.slice(0, codeToTest.indexOf(":"))
    console.log(propertyName)
    let propertyValue = codeToTest.slice(codeToTest.indexOf(':')+1, codeToTest.length - 1)
    console.log(propertyValue)

    ferretLand.style.setProperty(propertyName, propertyValue)
  }


  codeSubmit.addEventListener('click', function(e){
    e.preventDefault();

    // send code to test in ferretLand
    testFerretLand(lineOfCode.value)
    lineOfCode.value = ''
  })
})
