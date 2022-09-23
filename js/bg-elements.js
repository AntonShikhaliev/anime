const elements  = document.querySelectorAll('.set-bg');

for(let i= 0; i< elements.length; i++){
    // console.dir(elements[i]);
    const src = elements[i].dataset.setbg;
    elements[i].style.backgroundImage = `url(${src})`;
  
}