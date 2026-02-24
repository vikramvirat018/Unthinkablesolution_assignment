# Smart Recipe Generator

Smart Recipe Generator is a mobile-responsive web application that suggests recipes based on user-provided ingredients and dietary preferences.

## Approach
The application uses a predefined database of 20 recipes across various cuisines. Ingredient matching is implemented using a score-based filtering algorithm. Each recipe receives a match score depending on how many ingredients match the user input. Recipes are then sorted by highest relevance.

Filters are applied for dietary restrictions, difficulty level, and cooking time. Nutritional information (calories and protein) is embedded in each recipe object.

User interaction features include rating recipes, saving favorites using localStorage, and adjusting serving sizes. Basic loading states are implemented for better user experience.

The UI is clean, mobile-responsive, and built using HTML, CSS, and vanilla JavaScript without backend dependencies.

## Tech Stack
HTML, CSS, JavaScript

## Deployment
Deployable on Netlify or Vercel (Free tier).
