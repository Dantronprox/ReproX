const query = new URLSearchParams(window.location.search).get("query")
axios.get('https://api.institutoalfa.org/api/songs')
  .then(function (response) {
    // handle success
    console.log(response.data.songs);

    
    response.data.songs.map((song) => {

        const container = document.getElementById('track-list')

        const div = document.createElement('li')
        div.setAttribute('class', "playlist-item")

        div.innerHTML = `
            <img 
                src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" 
                alt=""  
            >
            <div class="song-info">
                <h2 class="font-bold">${song.title}</h2>
                <p class="opacity-60">${song.author}</p>
            </div>
        `

        
        div.addEventListener("click", () => {

        document.getElementById("current-song-image").setAttribute("src", "https://api.institutoalfa.org/api/songs/image/" + song.image.filename)
        
        document.getElementById("current-song-title").innerHTML= song.title
        
document.getElementById("current-song-audio").setAttribute("src", "https://api.institutoalfa.org/api/songs/audio/" + song.audio.filename)
        
        
        })








        container.appendChild(div)

    })


  })




