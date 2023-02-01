
const button = document.querySelector("button");
const div = document.getElementById("container");

const getDadJoke = async () => {

   const config = { headers: { Accept: 'application/json', } }
   const res = await axios.get("https://icanhazdadjoke.com/", config);
   const newJoke = res.data.joke;
   console.log(newJoke);



   div.append(newJoke);



}

button.addEventListener('click', function () {
   getDadJoke();
   div.innerHTML = '';



});