const datoString="Paladin"
const datoNumber= 7


axios.get('https://leonardoapi.onrender.com/songs')
  .then(function (response) {
    // handle success
    console.log(response);

response.data.songs.map((songs) => {

const container = document.getElementById('track-list')

const div = document.createElement('div')

div.setAttribute('class', 'flex grow-[1] flex-col gap-4 p-4')

div.innerHTML



container.appendChild(div)


})

  })
 
console.log(datoString + datoNumber)