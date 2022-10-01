const url = "https://frankieskitchen.cdragvik.one/wp-json/wp/v2/posts?per_page=100";
const carouselContainer = document.querySelector(".slideshow-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const loader = document.querySelector(".loader");

async function latestPosts(){
    try{
        const response = await fetch(url);
        const latestPosts = await response.json();
        console.log(latestPosts);

        for (let i = 0; i < 5; i++) {
            
            function createHTML(latestPosts) {
                carouselContainer.innerHTML += `<div class="mySlides fade">
                <a href="blogpost.html?id=${latestPosts[i].id}"><img src="${latestPosts[i].better_featured_image.source_url}" style="width:100%" class="car-image"></a>
                </div> 
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>`
            }

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
        loader.style.display ="none";
    } catch(error){
        console.log(error);
        carouselContainer.innerHTML = `<div class="error">Ups! An error has occured. Please try again later.</div>`;
    }
}

latestPosts();