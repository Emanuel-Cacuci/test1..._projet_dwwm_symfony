console.log('salut a tous')



const buttonTop = document.querySelector("#btnTop");
const d=document.querySelector(".divd")
window.addEventListener("scroll", () => {
    // console.log("possition actuelle du scroll :", window.scrollY, "px");
    // const hauteurTotale = document.getElementById.scroollHeight- window.innerHeight;
console.log(window.scrollY)
    if (window.scrollY < 400) {
        buttonTop.style.display = "none";
         document.body.style.backgroundColor = "white"
    }else {
        buttonTop.style.display = "block";
        console.error("error");
        document.body.style.backgroundColor = "Orange"
        d.style.position='right:0'

    }

});
