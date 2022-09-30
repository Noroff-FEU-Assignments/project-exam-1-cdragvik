const blogContainer = document.querySelector(".blogpost");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://frankieskitchen.cdragvik.one/wp-json/wp/v2/posts/" + id;

console.log(url);

async function details() {

    try {
        const response = await fetch(url); 
        const res = await response.json();

        console.log(res);

        newPageTitle = res.title.rendered;
        document.title = newPageTitle;

        console.log(res.id);

        blogContainer.innerHTML += "";

        blogContainer.innerHTML += `<div class="section"> 
                                    <h1>${res.title.rendered}</h1>
                                    <div class="container1">
                                    <img src="${res.better_featured_image.source_url}" style="max-width:100%;cursor:pointer"
                                    onclick="onClick(this)" class="modal-hover-opacity larger-image"></div>
                                    <div id="modal01" class="modal" onclick="this.style.display='none'">
                                        <span class="close">&times;&nbsp;&nbsp;&nbsp;</span>
                                        <div class="modal-content">
                                            <img id="img01" style="max-width:100%">
                                        </div>
                                    </div>
                                    <p>${res.content.rendered}</p>
                                    </div>`;

    } catch(error) {
        blogContainer.innerHTML = `<div class="error">Ups! An error has occured.</div>`;
    }

}
details();


/* Image modal */ 

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }