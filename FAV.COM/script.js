const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const formPopup = document.querySelector(".form-popup");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a")


showPopupBtn.addEventListener("click",()=>{
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click",()=>showPopupBtn.click())

loginSignupLink.forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup")
    })
})

const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".navbar .links");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");

menuBtn.addEventListener("click",()=>{
    navbarMenu.classList.toggle("show-menu");

})

hideMenuBtn.addEventListener("click",()=>menuBtn.click());
