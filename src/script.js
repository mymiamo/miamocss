document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            accordionItem.classList.toggle('active');

            //accordion
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });
        });
    });

    // Alert 
    document.querySelectorAll(".alert .close").forEach(function (button) {
        button.addEventListener("click", function () {
            this.parentElement.style.display = "none"; 
        });
    });
});
