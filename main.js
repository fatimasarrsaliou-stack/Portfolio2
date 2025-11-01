// main.js — Portfolio SI
document.getElementById('year').textContent = new Date().getFullYear();
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => nav.classList.toggle('show'));
// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href=a.getAttribute('href'); if(href.length>1){ e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
      nav.classList.remove('show');
    }
  });
});
