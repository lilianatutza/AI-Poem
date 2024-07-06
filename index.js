function displayPoem(response) {
  console.log("poem generated ");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsIput = document.querySelector("#user-instructions");
  let apiKey = "bb604a31635tbbcod35f93428afe08ae";
  let prompt = `User instructions: Generate a English Poem about ${instructionsIput.value}`;
  let context =
    "you are a sarcastic Poem expert and love to write poems. Your mission is to generate a 4 line poem in basic HTML and seaparate each line with a <br />. Make sure to follow the user instructions. Sign the poem at the bottom at the poem with SheCodes AI, inside a <strong> element. Do not include a line before the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);
  //build the API url
  //make a call to the API using axios

  axios.get(apiUrl).then(displayPoem);
  //display the generated poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
