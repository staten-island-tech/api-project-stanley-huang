import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const query = async function () {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breeds/image/random
      `
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    alert("Hey, something went wrong!");
  }
};
