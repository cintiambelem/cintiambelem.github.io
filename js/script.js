document.addEventListener('DOMContentLoaded', function () {

    const menuItems = document.querySelectorAll('.nav-item a');


    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = menuItem.getAttribute('data-target'); 
            const targetElement = document.getElementById(targetId);

            document.querySelectorAll('section').forEach(function (section) {
                section.style.display = 'none';
            });

            if (targetElement) {
                targetElement.style.display = 'block';
            }
        });
    });
});
