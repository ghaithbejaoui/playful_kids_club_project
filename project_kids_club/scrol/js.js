
const sections = document.querySelectorAll('.page-section');


let currentSection = 0;


let isScrolling = false;

window.addEventListener('wheel', (event) => {
    if (isScrolling) return; 

   
    isScrolling = true;

   
    if (event.deltaY > 0) {
       
        currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
       
        currentSection = Math.max(currentSection - 1, 0);
    }

    
    sections[currentSection].scrollIntoView({
        behavior: 'smooth'
    });


    setTimeout(() => {
        isScrolling = false;
    }, 20);

    event.preventDefault();
}, { passive: false });
