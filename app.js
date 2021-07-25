const API_Key ='k_bfwtv1du'
const API_KEY2 = 'k_d02b11k9';

const url = 'https://imdb-api.com/en/API/SearchMovie/k_bfwtv1du';

const btn_emt = document.querySelector("#search");
const inp_emt = document.querySelector("#exampleInputEmail1");
const movieSearchable = document.querySelector("#movies-searchable");


function movieSection(movies){
    return movies.map((Movie) => {
        return`
            <img src=${Movie.image} data-Movie-id=${Movie.id}/>
        `   
        ;
    })
}


function createMovieContainer(movies){
                                             
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'Movie');

    const template = `
        <section class="section">
            ${movieSection(movies)}
        </section>

        <div class="content">
            <p id="content-close">X</p>
        </div>
    `;

    movieElement.innerHTML = template;
    return movieElement;
}

btn_emt.onclick = function(event){
    event.preventDefault();
    const value = inp_emt.value;
    
    const newurl = url + '/'+value;

    fetch(newurl)
  .then((response) => response.json())
  .then((data) =>{

    const movies =data.results;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);

      console.log('Data:',data);
  })
  .catch(error => console.log('Error:', error));

    console.log("Value:",value);

    

}

