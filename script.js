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

  var bookingForm=document.querySelector('#booking-form');
  if(bookingForm){
    bookingForm.addEventListener('submit',function(event){
      event.preventDefault();
      var data=new FormData(bookingForm);
      var tourTime=data.get('time')==='sunrise'?'Sunrise tour':'Sunset tour';
      var message=[
        'Hello Wild Crocodile Adventure! I would like to book a tour.',
        '',
        'Name: '+data.get('name'),
        'Email: '+data.get('email'),
        'Phone / WhatsApp: '+data.get('phone'),
        'Number of guests: '+data.get('guests'),
        'Preferred date: '+(data.get('date')||'Not specified'),
        'Preferred time: '+tourTime,
        'Message: '+(data.get('message')||'None')
      ].join('\n');

      window.open('https://wa.me/94755359747?text='+encodeURIComponent(message),'_blank','noopener');
    });
  }
});
