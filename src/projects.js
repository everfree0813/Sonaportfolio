'use strict';

//project filltering logic

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
 const filter = event.target.dataset.category;
 if(filter == null) {
    return;
 }
 handleActiveSelection(event.target);
 filterProjects(filter);
});

//Active menu reset
function handleActiveSelection(target) {
const active = document.querySelector('.category--selected');
active.classList.remove('category--selected');
target.classList.add('category--selected');
}

//project filltering
function filterProjects(filter) {
 projectsContainer.classList.add('anim-out');
 projects.forEach(project => {
     console.log(project.dataset.type);
     if(filter == 'all' || filter == project.dataset.type) {
         project.style.display = 'block';
     } else {
         project.style.display = 'none';
     }
 });
 setTimeout(()=>{
     projectsContainer.classList.remove('anim-out');
 }, 250);
}