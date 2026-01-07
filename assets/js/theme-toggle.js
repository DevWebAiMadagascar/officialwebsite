/* ============================================
   THEME-TOGGLE.JS
   Script pour basculer entre thème clair et sombre
   ============================================ */

// Fonction pour initialiser le thème
function initTheme() {
    // Récupérer le thème sauvegardé ou utiliser 'light' par défaut
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Fonction pour basculer le thème
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Appliquer le nouveau thème
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('theme', newTheme);
    
    // Animation de transition
    document.body.style.transition = 'background 0.3s ease, color 0.3s ease';
}

// Initialiser le thème au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Ajouter l'événement click au bouton toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});
