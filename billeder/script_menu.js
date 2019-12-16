window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#menuknap_mobil").addEventListener("click", klikMenu);
}

function klikMenu() {
    console.log("klik menu");
    document.querySelector("#menu_mobil").classList.remove("hidden");
}
