function generateRecipes() {
const input = document.getElementById("ingredientsInput").value.toLowerCase();
const diet = document.getElementById("dietFilter").value;
const difficulty = document.getElementById("difficultyFilter").value;
const timeLimit = document.getElementById("timeFilter").value;
const loading = document.getElementById("loading");
const container = document.getElementById("recipesContainer");

container.innerHTML = "";
loading.classList.remove("hidden");

setTimeout(() => {

loading.classList.add("hidden");

const userIngredients = input.split(",").map(i=>i.trim()).filter(Boolean);

let results = recipes.map(recipe=>{
let matchScore = recipe.ingredients.filter(i=>userIngredients.includes(i)).length;
return {...recipe, matchScore};
});

results = results.filter(r=>r.matchScore>0);

if(diet) results = results.filter(r=>r.diet===diet);
if(difficulty) results = results.filter(r=>r.difficulty===difficulty);
if(timeLimit) results = results.filter(r=>r.time<=parseInt(timeLimit));

results.sort((a,b)=>b.matchScore-a.matchScore);

if(results.length===0){
container.innerHTML="<p>No recipes found.</p>";
return;
}

results.forEach(recipe=>{

const card=document.createElement("div");
card.className="recipe-card";

card.innerHTML=`
<h3>${recipe.name}</h3>
<p>Match Score: ${recipe.matchScore}</p>
<p>Calories: ${recipe.calories}</p>
<p>Protein: ${recipe.protein}g</p>
<p>Time: ${recipe.time} mins</p>
<p>Difficulty: ${recipe.difficulty}</p>
<label>Adjust Servings:
<input type="number" value="${recipe.servings}" min="1" onchange="adjustServing(${recipe.id},this.value)">
</label>
<ol>${recipe.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
<button onclick="saveFavorite(${recipe.id})">Save</button>
<div class="rating">
Rate:
<span onclick="rateRecipe(${recipe.id},1)">⭐</span>
<span onclick="rateRecipe(${recipe.id},2)">⭐</span>
<span onclick="rateRecipe(${recipe.id},3)">⭐</span>
<span onclick="rateRecipe(${recipe.id},4)">⭐</span>
<span onclick="rateRecipe(${recipe.id},5)">⭐</span>
</div>
`;

container.appendChild(card);
});

},1000);
}

function saveFavorite(id){
let favs=JSON.parse(localStorage.getItem("favorites"))||[];
if(!favs.includes(id)){
favs.push(id);
localStorage.setItem("favorites",JSON.stringify(favs));
alert("Saved!");
}
}

function rateRecipe(id,rating){
localStorage.setItem("rating_"+id,rating);
alert("Rated "+rating+" stars");
}

function adjustServing(id,value){
alert("Servings adjusted to "+value);
}
