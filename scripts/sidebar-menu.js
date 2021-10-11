(function() {
    const openingBTN = document.querySelector(".sidebar__hamburger");
    const closingBTN = document.querySelector(".sidebar__close");
    const sidebar = document.querySelector('.sidebar');
    
    openingBTN.addEventListener("click", function() {
        sidebar.classList.add('sidebar--opened');
    });
    
    closingBTN.addEventListener('click', function() {
        sidebar.classList.remove('sidebar--opened');
    }) 
}())
