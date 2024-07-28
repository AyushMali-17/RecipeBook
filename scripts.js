// taking help from ChatGpt while coding , and understanding the concepts and code via YT
// scripts.js



document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const recipes = document.querySelectorAll('.recipe');

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        recipes.forEach((recipe) => {
            if (recipe.innerText.toLowerCase().includes(searchString)) {
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
});

