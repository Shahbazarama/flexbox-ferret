document.addEventListener('DOMContentLoaded', function(e){
  let codeSubmit = document.querySelector('#codeSubmit')
  let lineOfCode = document.querySelector('#lineOfCode')
  codeSubmit.addEventListener('click', function(e){
    e.preventDefault();
    lineOfCode.value = ''
  })
})
