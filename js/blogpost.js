const blogContainer = document.querySelector(".blogpost");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const loader = document.querySelector(".loader");

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

        blogContainer.innerHTML += `<div class="section"> 
                                    <h1>${res.title.rendered}</h1>
                                    <img src="${res.better_featured_image.source_url}" onclick="onClick(this)" class="modal-hover-opacity res-image" alt="Food cooked based on recipe">
                                    <div id="modal" class="modal" onclick="this.style.display='none'">
                                        <span class="close">&times;&nbsp;&nbsp;&nbsp;</span>
                                        <div class="modal-content">
                                            <img id="img" style="max-width:100%">
                                        </div>
                                    </div>
                                    <p>${res.content.rendered}</p>
                                    </div>`;
        
        loader.style.display = "none";

    } catch(error) {
        blogContainer.innerHTML = `<div class="error">Ups! An error has occured.</div>`;
    }

}
details();

function onClick(element) {
    document.getElementById("img").src = element.src;
    document.getElementById("modal").style.display = "block";
  }

