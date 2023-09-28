
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
 
let url = './projectData.json'
fetch(url)
.then(res => res.json())
.then(data =>printdata(data))
.catch(error => console.error('There was a problem with the fetch operation:', error));

function printdata(data){
  var projectData = '';
data.projects.forEach(function(elem, ind){
  projectData += `<div class="project">
    <div class="img-box">
      <img src="./img/projectIMG/todo.jpg" alt="">
    </div>
    <div class="description-box">
      <h1>${elem.name}</h1>
      <p>${elem.description}</p>
      <button ><a href='${elem.img}' target="_blank">View</a></button>
    </div>
</div>`;
});
document.querySelector('.project-body').innerHTML = projectData;
}

let sun = document.querySelector('#sun');
let icon = document.querySelector('.icon');
let body = document.querySelector('body')
let moon = document.querySelector('#moon');


icon.addEventListener('click',function(){
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      sun.style.display = 'none';
      moon.style.display = 'block';
    } else {
      sun.style.display = 'block';
      moon.style.display = 'none';
    }

    let isNightMode = body.classList.contains('dark-mode')
    localStorage.setItem('dark-mode', isNightMode);
})


function setInitialTheme(){
  const  saveMode = localStorage.getItem('dark-mode')

 

  if(saveMode == "true"){
    body.classList.add('dark-mode')
    console.log('inite')
  }
}

setInitialTheme();