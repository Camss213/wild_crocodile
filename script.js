document.addEventListener('DOMContentLoaded',function(){
  var burger=document.querySelector('.burger');
  var links=document.querySelector('nav.links');
  if(burger){burger.addEventListener('click',function(){links.classList.toggle('open');});}

  var saved=localStorage.getItem('wca-lang');
  function setLang(lang){
    document.documentElement.className=lang;
    document.querySelectorAll('.lang-toggle button').forEach(function(b){
      b.classList.toggle('active', b.dataset.lang===lang);
    });
    localStorage.setItem('wca-lang',lang);
  }
  document.querySelectorAll('.lang-toggle button').forEach(function(b){
    b.addEventListener('click',function(){setLang(b.dataset.lang);});
  });
  setLang(saved||'en');
});
