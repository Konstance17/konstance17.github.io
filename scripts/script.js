// turn pages when click next or previous button.
const pageTurnBtn = document.querySelectorAll('.nextprev-btn'); // 20

  pageTurnBtn.forEach((el, index) => {

    // every button add onclick function.
    el.onclick = () => {
  
      //get every button data-page attribute value.
      const pageTurnId = el.getAttribute('data-page');
      
      //get every button is belong which page.
      const pageTurn = document.getElementById(pageTurnId);
      
      //add every page the z-index attribute. 
      if(pageTurn.classList.contains('turn')) {
        pageTurn.classList.remove('turn');
        setTimeout(() => {
          pageTurn.style.zIndex = 40 - index;
        }, 200);
      }else {
        pageTurn.classList.add('turn');
        setTimeout(() => {
          pageTurn.style.zIndex = 20 + index;
        }, 200);
      }
  
    };
  
  });

pageTurnBtn.forEach((el, index) => {

  // every button add onclick function.
  el.onclick = () => {

    //get every button data-page attribute value.
    const pageTurnId = el.getAttribute('data-page');
    
    //get every button is belong which page.
    const pageTurn = document.getElementById(pageTurnId);
    
    //add every page the z-index attribute. 
    if(pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 40 - index;
      }, 200);
    }else {
      pageTurn.classList.add('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 200);
    }

  };

});

// create reverse index function
const pages = document.querySelectorAll('.book-page.page-right');
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if(pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove('turn');
      setTimeout(() => {
        pages[pageNumber].style.zIndex = 10 + index;
      }, 150);

    }, (index + 1) * 200 + 100);
  });
};

// opening animation.
const coverRight = document.querySelector('.cover.cover-right');

// opening animation(cover right animation).
setTimeout(() => {
  coverRight.classList.add('turn');
},2100)

// set cover right z-index.
setTimeout(() => {
  coverRight.style.zIndex = -1;
},2500)

// opening animation(all page right animation).
pages.forEach((page, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove('turn');
    setTimeout(() => {
      pages[pageNumber].style.zIndex = 10 + index;
    }, 150);

  }, (index + 1) * 200 + 2600);
});

// download CV
const down = document.querySelector('.btn-box .btn');
down.onclick = (e) => {
  e.preventDefault();
  const pdfUrl = '../files/CV-Chen-Shan-Jia.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'CV-Chen-Shan-Jia.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

