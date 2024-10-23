var interactiveElements = document.querySelectorAll('a, span');
function updateCursor(e) {
  const cursorWidth = ccursor.offsetWidth / 2;
  const cursorHeight = ccursor.offsetHeight / 2;

  requestAnimationFrame(() => {
    ccursor.style.transform = `translate(${e.clientX - cursorWidth}px, ${e.clientY - cursorHeight}px)`;
  });

  const isHovering = Array.from(interactiveElements).some(el => el.matches(':hover'));

  if (isDesktop()) {
    ccursor.style.opacity = isHovering ? '0' : '1';
  }
}

function isDesktop() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|android|ipad|mobile/.test(userAgent);
  return !isMobile;
}

document.addEventListener('mousemove', (e) => {
  if (isDesktop()) {
    ccursor.style.display = 'inline';
    updateCursor(e);
  } else {
    ccursor.style.display = 'none';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const projectBtn = document.getElementById('project-btn');
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');

  if (projectBtn && popup && closeBtn) {
    projectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      popup.style.animation = 'fadeOut 0.5s ease';
      setTimeout(() => {
        popup.style.display = 'none';
        popup.style.animation = 'fadeIn 0.5s ease';
      }, 500);
    });

    window.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
          popup.style.display = 'none';
          popup.style.animation = 'fadeIn 0.5s ease';
        }, 500);
      }
    });
  }
});

window.onload = () => {
  const ccursor = document.getElementById('ccursor');
  var interactiveElements = document.querySelectorAll('a, span');
  if (!isDesktop()) {
    ccursor.style.display = 'none';
    document.getElementById("myText").classList.add("centered-text");
  } else {
    document.getElementById("myText").classList.add("centered-text2");
  }
  
};

window.onresize = () => {
  if (!isDesktop()) {
    ccursor.style.display = 'none';
    document.getElementById("myText").classList.add("centered-text");
  } else {
    ccursor.style.display = 'inline';
    document.getElementById("myText").classList.add("centered-text2");
  }
};
