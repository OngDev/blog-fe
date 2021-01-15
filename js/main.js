window.onload = function(){
    const btnSearch = document.querySelector(".btnSearch");
    const searchContain = document.querySelector(".searchContain");
    const textNav = document.querySelector(".textNav");
    const overlay = document.querySelector(".overlay");
    const nav = document.querySelector("nav");

    btnSearch.addEventListener("click", function(e){
        e.preventDefault();
        searchContain.classList.toggle("active");
        if(searchContain.classList.contains("active")){
            textNav.classList.add("hide");
            overlay.classList.add("active");
        }else {
            overlay.classList.remove("active");
            textNav.classList.remove("hide");
        }
    });

    overlay.addEventListener("click", function(){
        btnSearch.click();
    });
}