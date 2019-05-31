document.addEventListener('DOMContentLoaded', function(e){
  let codeSubmit = document.querySelector('#codeSubmit')
  let lineOfCode = document.querySelector('#lineOfCode')
  let victoryText = document.querySelector('.victoryText')

  let ferretLand = document.querySelector('.ferretLand')


  function testFerretLand(codeToTest){
    let propertyName = codeToTest.slice(0, codeToTest.indexOf(":"))
    console.log(propertyName)
    let propertyValue = codeToTest.slice(codeToTest.indexOf(':')+1, codeToTest.length - 1)
    console.log(propertyValue)

    ferretLand.style.setProperty(propertyName, propertyValue)
  }

  function checkForVictory(){
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    let currentStyles = ferretLand.getAttribute('style')

    if(currentStyles.includes('justify-content: center;')) {
      if(currentStyles.includes('align-items: center;')) {
        if(currentStyles.includes('flex-direction: column;')) {
          // victory!
          victoryText.style.display = 'block'

        } else{
          victoryText.style.display = 'none'
        }
      } else {
        victoryText.style.display = 'none'
      }
    } else{
      victoryText.style.display = 'none'
    }
  }

  codeSubmit.addEventListener('click', function(e){
    e.preventDefault();

    // send code to test in ferretLand
    testFerretLand(lineOfCode.value)
    lineOfCode.value = ''

    checkForVictory();
  })
})
