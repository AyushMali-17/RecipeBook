// taking help from ChatGpt while coding , and understanding the concepts and code via YT
// scripts.js



// scripts.js

// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const recipes = document.querySelectorAll('.recipe');

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        recipes.forEach((recipe) => {
            const recipeText = recipe.innerText.toLowerCase();
            if (recipeText.includes(searchString)) {
                recipe.style.display = '';
            } else {
                recipe.style.display = 'none';
            }
        });
    });

    const viewRecipeButtons = document.querySelectorAll('.view-recipe');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    viewRecipeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
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

    const categoryLinks = document.querySelectorAll('.sidebar ul li a');

    categoryLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('href').substring(1);
            recipes.forEach((recipe) => {
                if (category === 'all') {
                    recipe.style.display = '';
                } else if (recipe.classList.contains(category)) {
                    recipe.style.display = '';
                } else {
                    recipe.style.display = 'none';
                }
            });
        });
    });
});
