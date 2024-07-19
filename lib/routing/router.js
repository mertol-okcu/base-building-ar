import { addNavBar } from "./nav_bar";
import { initAuthPage } from "./auth_page";
import { initMapPage } from "./map_page";
import { initBasePage } from "./base_page";

let activeView = document.getElementById("active-view");

export const initRouter = async () => {
  activeView = document.getElementById("active-view");
  if (!activeView) {
    document.body.innerHTML = "";
    activeView = document.createElement("div");
    activeView.id = "active-view";
    document.body.appendChild(activeView);
  }
};

export const goToAuthPage = () => {
  activeView.innerHTML = "";

  cloneSelectedPage("auth-page");
  initAuthPage();
};

export const goToMapPage = () => {
  activeView.innerHTML = "";
  addNavBar(activeView);

  cloneSelectedPage("map-page");
  initMapPage();
};

export const goToBasePage = () => {
  activeView.innerHTML = "";
  addNavBar(activeView);

  cloneSelectedPage("base-page");
  initBasePage();
};

const cloneSelectedPage = (templateId) => {
  let temp = document.getElementById(templateId);
  let clon = temp.content.cloneNode(true);
  activeView.appendChild(clon);
};
