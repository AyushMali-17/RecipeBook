// taking help from ChatGpt while coding , and understanding the concepts and code via YT





// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const recipeGrid = document.getElementById('recipes');
    const recipeForm = document.getElementById('recipe-form');
    const searchBar = document.getElementById('search-bar');
    const categoryLinks = document.querySelectorAll('.sidebar a');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const recipes = [
        {
            name: 'Spaghetti Bolognese',
            category: 'dinner',
            ingredients: ['spaghetti', 'minced meat', 'tomato sauce', 'onion', 'garlic', 'olive oil', 'basil'],
            instructions: 'Cook spaghetti according to package instructions. In a separate pan, sauté onion and garlic in olive oil, add minced meat, cook until brown. Add tomato sauce and basil, simmer for 20 minutes. Serve over spaghetti.'
        },
        {
            name: 'Chocolate Cake',
            category: 'dessert',
            ingredients: ['flour', 'sugar', 'cocoa powder', 'baking powder', 'eggs', 'milk', 'butter', 'vanilla extract'],
            instructions: 'Preheat oven to 350°F. Mix dry ingredients. Add eggs, milk, butter, and vanilla. Pour into greased baking pan. Bake for 30-35 minutes. Let cool before serving.'
        }
    ];

    const renderRecipes = (recipesToRender) => {
        recipeGrid.innerHTML = '';
        recipesToRender.forEach((recipe, index) => {
            const recipeElement = document.createElement('article');
            recipeElement.classList.add('recipe');
            recipeElement.innerHTML = `
                <h2>${recipe.name}</h2>
                <p>Category: ${recipe.category}</p>
                <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
                <button class="view-recipe" data-index="${index}">View Recipe</button>
                <div class="modal">
                    <div class="modal-content">
                        <span class="close-button">&times;</span>
                        <h2>${recipe.name}</h2>
                        <p>Category: ${recipe.category}</p>
                        <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
                        <p>Instructions: ${recipe.instructions}</p>
                    </div>
                </div>
            `;
            recipeGrid.appendChild(recipeElement);
        });

        const viewRecipeButtons = document.querySelectorAll('.view-recipe');
        const modals = document.querySelectorAll('.modal');
        const closeButtons = document.querySelectorAll('.close-button');

        viewRecipeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const index = button.dataset.index;
                modals[index].style.display = 'block';
            });
        });

        closeButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                modals[index].style.display = 'none';
            });
        });

        window.addEventListener('click', (e) => {
            modals.forEach((modal) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    };

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchString) ||
            recipe.ingredients.join(' ').toLowerCase().includes(searchString)
        );
        renderRecipes(filteredRecipes);
    });

    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('recipe-name').value;
        const category = document.getElementById('recipe-category').value.toLowerCase();
        const ingredients = document.getElementById('recipe-ingredients').value.split(',').map(ing => ing.trim());
        const instructions = document.getElementById('recipe-instructions').value;
        recipes.push({ name, category, ingredients, instructions });
        recipeForm.reset();
        renderRecipes(recipes);
    });

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            const filteredRecipes = category === 'all' ? recipes : recipes.filter(recipe => recipe.category === category);
            renderRecipes(filteredRecipes);
        });
    });

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    // Initial render
    renderRecipes(recipes);
});
