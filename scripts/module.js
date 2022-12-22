Hooks.on("renderSidebarTab", (app, html) => {
  if (!(app instanceof CompendiumDirectory)) {
    return;
  }

  const compendiumSections = html.find("li.compendium-type");

  for (let i = 0; i < compendiumSections.length; i++) {
    const section = compendiumSections[i];

    const originalTitleElement = section.children[0];

    const wrapper = document.createElement("div");
    wrapper.classList = ["title"];

    const title = document.createElement("h3");
    title.textContent = originalTitleElement.textContent;

    const button = document.createElement("button");
    button.textContent = "-";

    button.addEventListener("click", (event) => {
      const clickedButton = event.target;
      const contents = clickedButton.parentElement.parentElement.children[1];

      if (contents.classList.contains("collapsed")) {
        contents.classList.remove("collapsed");
        clickedButton.textContent = "-";
      } else {
        contents.classList.add("collapsed");
        clickedButton.textContent = "+";
      }
    });

    wrapper.appendChild(title);
    wrapper.appendChild(button);

    originalTitleElement.replaceWith(wrapper);
  }
});
