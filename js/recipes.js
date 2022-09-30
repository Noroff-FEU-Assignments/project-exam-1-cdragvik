
const recipesContainer = document.querySelector(".reci");
const loadmore = document.querySelector(".loadmore");
const loader = document.querySelector(".loader");
let currentPage = 0;


async function getRecipes(){
    currentPage++; 
    const url = `https://frankieskitchen.cdragvik.one/wp-json/wp/v2/posts?per_page=10&page=${currentPage}`;
    try{
        const response = await fetch(url);
        const getRecipes = await response.json();
        console.log(getRecipes);
        const maxpages = response.headers.get("x-wp-totalpages");
        if (Number(maxpages) === currentPage) {
            loadmore.style.display = "none"; 
        }
        loader.style.display ="none";

        for (let i = 0; i < getRecipes.length; i++) {
            function createHTML(getRecipes){
                recipesContainer.innerHTML += `<div class="recipes">
                    <a href="blogpost.html?id=${getRecipes[i].id}"><div class="recipes-box"> 
                    <img src="${getRecipes[i].better_featured_image.source_url}" class="image">
                    <h2>${getRecipes[i].title.rendered}</h2>
                    </div></a>
                    </div>`;
        }
        createHTML(getRecipes);


    }
    } catch(error){
        console.log(error);
        recipesContainer.innerHTML = `<div class="error">Ups! An error has occured. Please try again later.</div>`;
    }
}

getRecipes();

loadmore.addEventListener("click", getRecipes);