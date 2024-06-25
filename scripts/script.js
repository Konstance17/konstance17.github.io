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
        pageTurn.style.zIndex = 20 -index;
      }, 500);
    }else {
      pageTurn.classList.add('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }

  };

});

// contact me button when click.
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add('turn');
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500)

    }, (index + 1) * 200 + 100);
  });

};

// create reverse index function
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
      console.log([pages[pageNumber].getAttribute('id')]);
      pages[pageNumber].classList.remove('turn');
      setTimeout(() => {
        pages[pageNumber].style.zIndex = 20 + index;
        console.log(index);
      }, 150);

    }, (index + 1) * 200 + 100);
  });
};

// opening animation
const coverRight = document.querySelector('.cover.cover-right');

// opening animation(cover right animation)
