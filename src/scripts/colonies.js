import { getColonies } from "./database.js";

const colonies = getColonies();

export const Colonies = () => {
  let coloniesHTML = "<ul>";

  for (const colony of colonies) {
    coloniesHTML += `<li id="colonies--${colony.id}">${colony.name}</li>`;
  }
  coloniesHTML += "</ul>";

  return coloniesHTML;
};
