// Fond d'étoiles optimisé et amélioré pour Rick and Morty Explorer
document.addEventListener('DOMContentLoaded', function() {
  // Créer l'élément de fond d'étoiles
  const starBackground = document.createElement('div');
  starBackground.className = 'star-background';
  document.body.appendChild(starBackground);
  
  // Générer les étoiles
  generateStars();
  
  // Gestion de la barre de navigation (effet au scroll)
  const navbar = document.querySelector('.nav-portal');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 30) {
        navbar.style.backgroundColor = 'rgba(10, 10, 25, 0.95)';
        navbar.style.boxShadow = '0 4px 10px rgba(151, 206, 76, 0.3)';
      } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 25, 0.9)';
        navbar.style.boxShadow = 'none';
      }
    });
  }
  
  // Ajouter quelques portails en arrière-plan
  addRandomPortals();
});

function generateStars() {
  const starBackground = document.querySelector('.star-background');
  if (!starBackground) return;
  
  // Nettoyage du fond existant
  starBackground.innerHTML = '';
  
  const starCount = 150;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Propriétés aléatoires
    const size = Math.random() * 2.5 + 0.5;
    const posX = Math.floor(Math.random() * windowWidth);
    const posY = Math.floor(Math.random() * windowHeight);
    const duration = Math.random() * 5 + 2;
    const delay = Math.random() * 5;
    
    // Quelques étoiles colorées (15% des étoiles)
    const colorChance = Math.random();
    if (colorChance > 0.9) {
      star.style.backgroundColor = '#97ce4c'; // vert Rick and Morty
      star.style.boxShadow = '0 0 3px #97ce4c';
    } else if (colorChance > 0.85) {
      star.style.backgroundColor = '#00b5cc'; // bleu Rick and Morty
      star.style.boxShadow = '0 0 3px #00b5cc';
    }
    
    // Appliquer les styles
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${posX}px`;
    star.style.top = `${posY}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    
    starBackground.appendChild(star);
  }
}

function addRandomPortals() {
  const starBackground = document.querySelector('.star-background');
  if (!starBackground) return;
  
  // Ajouter quelques mini-portails en arrière-plan
  for (let i = 0; i < 3; i++) {
    const portal = document.createElement('div');
    portal.className = 'mini-portal';
    
    // Positions aléatoires
    const posX = Math.floor(Math.random() * window.innerWidth);
    const posY = Math.floor(Math.random() * window.innerHeight);
    const size = Math.random() * 40 + 30;
    
    portal.style.position = 'absolute';
    portal.style.left = `${posX}px`;
    portal.style.top = `${posY}px`;
    portal.style.width = `${size}px`;
    portal.style.height = `${size}px`;
    portal.style.borderRadius = '50%';
    portal.style.background = 'radial-gradient(circle, #97ce4c, #00b5cc, #741fa8)';
    portal.style.opacity = '0.4';
    portal.style.filter = 'blur(5px)';
    portal.style.animation = 'portal-spin 10s linear infinite';
    portal.style.zIndex = '-1';
    
    starBackground.appendChild(portal);
  }
}

// Régénérer les étoiles lors du redimensionnement de la fenêtre
window.addEventListener('resize', function() {
  generateStars();
  // Réajouter les portails après le redimensionnement
  setTimeout(addRandomPortals, 100);
});