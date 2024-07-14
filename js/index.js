import { Details } from './Details.module.js';
import { Home } from './home.module.js';
// import { Ui } from './ui.module.js';
// =============== start navbar ===============

const navbtn = $("nav .changebtn");
navbtn.on("click", function () {
  if ($("nav .changebtn").hasClass("fa-bars")) {
    openNav()
  } else {
    closeNav()
  }
});

export function openNav(){
  $("nav .changebtn").removeClass("fa-bars");
  $("nav .changebtn").addClass("fa-xmark");
  $("nav ul li").animate({ top: "0px", opacity: 1 }, 700);
  $("nav").animate({ left: "0px" }, 500);
  
}
export function closeNav(){
  $("nav .changebtn").addClass("fa-bars");
  $("nav .changebtn").removeClass("fa-xmark");
  $("nav ul li").animate({ top: "300px", opacity: 0 }, 700);
  $("nav").animate({ left: "-240px" }, 500);
}

// =============== end navbar ===============

// =============== home ===============

const home = new Home()
home.defultScreen()
// const details = new Details();
// home.getMealsOfArea()
