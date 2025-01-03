document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
  
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  

  document.getElementById("workBtn").addEventListener("click", function(e){

    e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
  
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });


  })

  const menu = document.getElementById("menu")
  const nav = document.getElementById("nav")
  const close = document.getElementById("close")

  menu.addEventListener("click", ()=>{
    nav.style.top="-30px"
  })
  
  close.addEventListener("click", ()=>{
    nav.style.top="-1000px"
  })
  
