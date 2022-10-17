import { contact } from "./contact";
import { pageLoad } from "./initialPageLoad";
import { menu } from "./menu";

pageLoad();

const homeTab = document.querySelector(".home");
homeTab.addEventListener("click", pageLoad);

const menuTab = document.querySelector(".menu");
menuTab.addEventListener("click", menu);

const contactTab = document.querySelector(".contact");
contactTab.addEventListener("click", contact);
