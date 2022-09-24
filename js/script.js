const url = "https://frankieskitchen.cdragvik.one/wp-json/wp/v2/posts";
const recipesContainer = document.querySelector(".recipes");

async function getRecipes(){
    try{
        const response = await fetch(url);
        const getRecipes = await response.json();
        createHTML(getRecipes);
        console.log(getRecipes);
    }

    catch(error){
        console.log(error);
    }
}

getRecipes();


function createHTML(recipes){
    recipes.forEach(function(recipe){

        recipesContainer.innerHTML += `<div> 
        <h2>${recipe.title.rendered}</h2> 
        </div>`;
    })
}