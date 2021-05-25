export async function getDog(breed) {
  let response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  return await response.json();
}
getDog();
