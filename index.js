function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Tyger! Tyger! burning bright. In the forests of the night, What immortal hand or eye. Could frame thy fearful symmetry?",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
