const url = "https://frankieskitchen.cdragvik.one/wp-json/wp/v2/posts?per_page=100";
const carouselContainer = document.querySelector(".slideshow-container");

async function latestPosts(){
    try{
        const response = await fetch(url);
        const latestPosts = await response.json();
        console.log(latestPosts);

        for (let i = 0; i < 5; i++) {
            function createHTML(posts) {
                carouselContainer.innerHTML += `<div class="mySlides fade">
                <img src="${latestPosts[i].better_featured_image.source_url}" alt="" style="width:100%" class="car-image">
                </div> 
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>`
            }

        /* Bruke addEventListener til knappene*/ 
        /* document.querySelector('.prev').addEventListener("click", function(event) {}) ????? */

        createHTML(latestPosts);

        let slideIndex = 1;
        showSlides(slideIndex);

        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");

          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          
          slides[slideIndex-1].style.display = "block";

        }
        }

    } catch(error){
        console.log(error);
        carouselContainer.innerHTML = `<div class="error">Ups! An error has occured</div>`;
    }
}

latestPosts();