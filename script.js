var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];



  document.addEventListener('DOMContentLoaded', function() {
    
    const mainEl = document.querySelector('main');
    
    mainEl.style.backgroundColor = 'var(--main-bg)';
    
    mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
    
    mainEl.classList.add('flex-ctr');
  
});



  document.addEventListener("DOMContentLoaded", function () {
   
    const topMenuEl = document.getElementById("top-menu");    // used get elementById because the 'nav' tag is an id in this instance. 

    menuLinks.forEach((link) => {
        const menuArr = document.createElement('a');

        menuArr.setAttribute('href', link.href);

        menuArr.textContent = link.text;

        topMenuEl.appendChild(menuArr);
    })
   topMenuEl.classList.add("flex-around");

  })