document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  
    // Animation for sections on scroll
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      sectionObserver.observe(section);
    });
  
    // Updated geometric shapes for background animation
    const geometricShapes = [
      '■', '▲', '●', '◆', '★', '△', '□', '○', '◇', '♦', '▼', '◄', '►', '◢', '◣', '◤', '◥'
    ];
  
    const rainContainer = document.getElementById('keyboard-rain');
    
    function createShape() {
      const shape = document.createElement('div');
      shape.className = 'shape';
      shape.style.left = Math.random() * 100 + 'vw';
      shape.style.top = -50 + 'px';
      shape.style.fontSize = (Math.random() * 30 + 15) + 'px';
      shape.style.opacity = Math.random() * 0.6 + 0.4;
      shape.textContent = geometricShapes[Math.floor(Math.random() * geometricShapes.length)];
      
      const duration = Math.random() * 4 + 2;
      const rotation = Math.random() < 0.5 ? 360 : -360;
      shape.style.animation = `fall ${duration}s linear`;
      shape.style.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
      
      rainContainer.appendChild(shape);
      
      setTimeout(() => {
        shape.remove();
      }, duration * 1000);
    }
  
    // Add falling animation
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes fall {
        0% {
          transform: translateY(0) rotate(0deg);
        }
        100% {
          transform: translateY(105vh) rotate(${Math.random() < 0.5 ? 360 : -360}deg);
        }
      }
    `, styleSheet.cssRules.length);
  
    // Create new shapes periodically
    setInterval(createShape, 100);
  
    // Enhanced table hover effects
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      table.addEventListener('mouseenter', () => {
        table.style.transform = 'scale(1.01) translateY(-5px)';
        table.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        table.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      });
      table.addEventListener('mouseleave', () => {
        table.style.transform = 'scale(1) translateY(0)';
        table.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      });
    });
  
    // Enhanced checkmark effects
    const checkmarks = document.querySelectorAll('.checkmark');
    checkmarks.forEach(checkmark => {
      checkmark.addEventListener('mouseenter', () => {
        checkmark.style.transform = 'scale(1.2) rotate(360deg)';
        checkmark.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      });
      checkmark.addEventListener('mouseleave', () => {
        checkmark.style.transform = 'scale(1) rotate(0)';
      });
    });
  });