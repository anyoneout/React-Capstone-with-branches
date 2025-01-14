export async function oaRecipeImage(recipeChoice, oaUserToken) {
  const userRecipe = recipeChoice.value;
  let url = "https://api.openai.com/v1/images/generations";
  let payload = {
    model: "dall-e-3",
    prompt: `Create a photo-realistic image of the following culinary creation: ${userRecipe}. The creation should be displayed against a solid black background, with no shadows, reflections, lighting effects, gradients, or any other elements. The background should be a flat, uniform black with no variations or light sources, blending seamlessly with the page background. There should be no text, numbers, hands, or additional objects—only the culinary creation`,
    n: 1,
    size: "1024x1024"
  };
  let result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Authorization": `Bearer ${oaUserToken}`,
      "Content-Type": "application/json"
    }
  });
  let dataRecipeImage = await result.json();
  return dataRecipeImage;
};