const jokeButton = document.getElementById("joke-button")
jokeButton.addEventListener ("click", function() {

    fetch('https://official-joke-api.appspot.com/random_joke')
  .then((response) => response.json())
  .then((data) => {
  
  console.log(data)
  document.getElementById("joke-setup").textContent = data.setup 
  setTimeout(() => {document.getElementById("joke-punchline").textContent = data.punchline }, 2000);
  document.getElementById("joke-punchline").textContent = "" 





  })


} )
