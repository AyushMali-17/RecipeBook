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
});
