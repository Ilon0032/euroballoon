window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#menuknap_mobil").addEventListener("click", klikMenu);

}

function klikMenu() {
    console.log("klik menu");
    document.querySelector(".nav_mobil").classList.remove("hide");
}



//
//function mouseOut() {
//    console.log("ikke over mus");
//    document.querySelector(".tekst_forside").onmouseout.classList.add("hide");
//}
////
//document.querySelector(".tekst_forside").onmouseover = function ({
//    mouseOver
//});
