window.addEventListener('load', () => {
  const photo = document.querySelector('#hero img');
  if(photo) {
    photo.classList.add('visible'); 
    photo.classList.add('animate'); // menambahkan efek glow/animasi
  }
});

const sections = document.querySelectorAll('section');
const skills = document.querySelectorAll('.progress');

function isInViewport(el){
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 50;
}

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if(isInViewport(section)) section.classList.add('visible');
  });
  skills.forEach(skill => {
    const parent = skill.closest('.skill');
    if(isInViewport(parent)) skill.style.width = skill.getAttribute('data-width');
  });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message!');
  form.reset();
});
