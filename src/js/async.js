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
