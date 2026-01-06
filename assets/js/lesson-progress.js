/**
 * Système de suivi de progression des leçons
 * Fichier JS réutilisable pour toutes les pages de leçons
 */

// Configuration - Détecte automatiquement l'ID de la leçon depuis l'attribut data-lesson-id du body
const lessonId = document.body.getAttribute('data-lesson-id');

if (!lessonId) {
    console.error('Erreur : L\'attribut data-lesson-id est manquant sur la balise <body>');
}

// Marquer automatiquement la leçon comme "vue" dès le chargement de la page
function markAsVisited() {
    if (lessonId) {
        localStorage.setItem(lessonId + '-visited', 'true');
        console.log(`Leçon ${lessonId} marquée comme vue`);
    }
}

// Marquer la leçon comme "terminée"
function markAsCompleted() {
    if (lessonId) {
        localStorage.setItem(lessonId + '-completed', 'true');
        
        // Feedback visuel
        const completeBtn = document.getElementById('complete-lesson-btn');
        if (completeBtn) {
            completeBtn.textContent = '✓ Leçon terminée !';
            completeBtn.style.background = '#10b981';
            completeBtn.disabled = true;
        }
        
        // Notification
        alert('🎉 Félicitations ! Cette leçon a été marquée comme terminée.');
        
        console.log(`Leçon ${lessonId} marquée comme terminée`);
    }
}

// Vérifier si la leçon est déjà complétée au chargement
function checkCompletionStatus() {
    if (lessonId) {
        const isCompleted = localStorage.getItem(lessonId + '-completed') === 'true';
        const completeBtn = document.getElementById('complete-lesson-btn');
        
        if (isCompleted && completeBtn) {
            completeBtn.textContent = '✓ Leçon terminée !';
            completeBtn.style.background = '#10b981';
            completeBtn.disabled = true;
        }
    }
}

// Créer automatiquement le bouton "Terminer la leçon" si un conteneur existe
function createCompleteButton() {
    const container = document.getElementById('lesson-complete-container');
    
    if (container && !document.getElementById('complete-lesson-btn')) {
        const button = document.createElement('button');
        button.id = 'complete-lesson-btn';
        button.textContent = 'Marquer comme terminée';
        button.className = 'complete-lesson-btn';
        button.onclick = markAsCompleted;
        
        container.appendChild(button);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    markAsVisited();
    checkCompletionStatus();
    createCompleteButton();
});

// Exposer la fonction globalement pour utilisation dans les pages
window.markLessonCompleted = markAsCompleted;