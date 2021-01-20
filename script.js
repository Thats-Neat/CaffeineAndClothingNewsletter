function buttonPressed() {
  var text = document.getElementById("forum");
  var legal = text.value.includes(".com");
  if (legal == true){
    alert("Thanks for signing up for the email newsletter!");
  }else{
    alert("Invalid email!");
  }
  
const scriptURL = 'https://script.google.com/macros/s/AKfycbxrjinIn0s3-XulZk_6JGCBkrNTepZMN8bFNuMIHEbZe_lnZ09qbpz6/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
  
  
  
  


}