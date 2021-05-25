import { getDog } from "./async";

async function getDogList(breed) {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  createBreedList(data.message);
}

async function randomPic() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data.message);
  return data.message;
}
randomPic();
getDogList();
function createBreedList(breedList) {
  document.getElementById("preview").innerHTML = `
  <img class="new-img">
  <img class="new-img">
  <img class="new-img">
  <img class="new-img">
  `;
  Array.from(document.getElementById("preview").children).forEach(
    async (img) => {
      img.src = await randomPic();
    }
  );

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
