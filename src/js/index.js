import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

async function getDog(breed) {
  let x = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  return await x.json();
}

document
  .getElementById("dog-selector-id")
  .addEventListener("change", async function () {
    let link = (await getDog(this.value)).message;
    document.getElementById("dog-img").src = link;
  });
