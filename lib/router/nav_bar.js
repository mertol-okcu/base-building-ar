import { signOut } from "../database/auth_service";

export const addNavBar = (parent) => {
  let temp = document.getElementById("nav-bar");
  let clon = temp.content.cloneNode(true);
  parent.appendChild(clon);
  document
    .getElementById("logout-button")
    .addEventListener("click", (event) => {
      signOut();
    });
};
