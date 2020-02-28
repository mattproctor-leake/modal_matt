//this is for scroll box 
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      // stop observing the button
      ob.unobserve(terms.lastElementChild);
    }
  }

  
  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 0,
  });
  
  ob.observe(terms.lastElementChild);


// this is for 4 x modals
const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

console.log(button);

function handleCardButtonClick () {
    const button = event.currentTarget;
    const card = button. closest('.card');
    //  grab image src
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
// populate the modal with the new info
modalInner.innerHTML = `
<img src="${imgSrc.replace('200', '600')}" alt=${name}"/>
<p>${desc}</p>
`;
// show the modal
modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click',
handleCardButtonClick));

function closeModal () {
    modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', function(e) {
    const isOutside = !e.target.closest('.modal-inner');
    if (isOutside) {
        modalOuter.classList.remove('open');
    }
})
window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        closeModal();
    }
})


