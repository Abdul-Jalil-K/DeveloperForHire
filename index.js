

document.querySelector("#dark-theme").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    document.querySelector("#introduction").classList.toggle("gradient-background");
    document.querySelector("#footer").classList.toggle("gradient-background");
    document.querySelector("#features").classList.toggle("grey");
    document.querySelector("#resume").classList.toggle("grey");
    document.querySelector("#pricing").classList.toggle("grey");
    document.querySelector("#footer a").classList.toggle("white");
    document.querySelector("nav").classList.toggle("navbar-light");
    document.querySelector("nav").classList.toggle("bg-light");
    document.querySelector("nav").classList.toggle("navbar-dark");
    document.querySelector("nav").classList.toggle("midnight-blue");
})




