'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')
    
        var className = document.body.className;
    
    if (className == "ligth-theme") {
        
        this.textContent = "Dark";
        console.log("classe 444444444"  );
    } else {
    //    document.body.classList.toggle('light-theme')
        this.textContent = "Light";
        console.log("classe 3333333333"  );
    }
    console.log("classe ===" + className);
});
