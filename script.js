// Sélectionnez tous les éléments avec la classe "a"
const elements = document.querySelectorAll('.a');

// Pour chaque élément avec la classe "a"
elements.forEach(element => {
  const tooltipText = element.getAttribute('title');
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = tooltipText;
  document.body.appendChild(tooltip);

  // Afficher l'infobulle à côté de la souris au survol de chaque élément
  element.addEventListener('mousemove', function (e) {
    tooltip.style.display = 'block';
    
    // Calculer la position de l'infobulle en fonction de la position de la souris
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    let tooltipX = mouseX + 10;
    let tooltipY = mouseY + 10;
    
    // Vérifier si l'infobulle dépasse les bords droits de la fenêtre
    if (tooltipX + tooltipWidth > windowWidth) {
      tooltipX = mouseX - tooltipWidth - 10;
    }
    
    // Vérifier si l'infobulle dépasse les bords bas de la fenêtre
    if (tooltipY + tooltipHeight > windowHeight) {
      tooltipY = mouseY - tooltipHeight - 10;
    }
    
    tooltip.style.top = tooltipY + 'px';
    tooltip.style.left = tooltipX + 'px';
  });

  // Cacher l'infobulle lorsque la souris quitte chaque élément
  element.addEventListener('mouseout', function (e) {
    tooltip.style.display = 'none';
  });
});

