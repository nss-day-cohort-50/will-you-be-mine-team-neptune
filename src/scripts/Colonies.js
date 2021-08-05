import { getColonies } from "./database.js";

const colonies = getColonies();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("colonies")) {
    const [, coloniesId] = itemClicked.id.split("--");

    for (const colony of colonies) {
      if (colony.id === parseInt(coloniesId)) {
        window.alert(`${colonies.name}`);
      }
    }
  }
});

export const Colonies = () => {
  let coloniesHTML = "<ul>";

  for (const colony of colonies) {
    coloniesHTML += `<li id="colonies--${colonies.id}">${colonies.name}</li>`;
  }
  coloniesHTML += "</ul>";

  return coloniesHTML;
};
