//import { yes, no } from "./async";
async function getDog(breed) {
  let x = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  return await x.json();
}
getDog();

async function getDogList(breed) {
  const y = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await y.json();
  createBreedList(data.message);
}
getDogList();
function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
  <select name="" id="dog-selector-id">
            <option value="">Select a dog! </option>
    ${Object.keys(breedList)
      .map(function (breed) {
        return `<option>${breed}</option>`;
      })
      .join("")}
  </select>
  `;
  document
    .getElementById("dog-selector-id")
    .addEventListener("change", async function () {
      let link = (await getDog(this.value)).message;
      document.getElementById("dog-img").src = link;
    });
}
