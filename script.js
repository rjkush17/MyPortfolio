let hamburgur = document.querySelector('.hamburgur');
let header = document.querySelector('header');
let bars = document.querySelector('#bars');
let cross = document.querySelector('#cross');

hamburgur.addEventListener('click',function(){
    header.classList.toggle('active');

    if (header.classList.contains('active')) {
        bars.style.display = 'none';
        cross.style.display = 'block';
      } else {
        bars.style.display = 'block';
        cross.style.display = 'none';
      }
    });
