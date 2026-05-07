window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(15,23,42,0.9)";
    }else{
        navbar.style.background = "rgba(255,255,255,0.08)";
    }
});