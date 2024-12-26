const sections = document.querySelectorAll('.section');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // Button click active class
    sectBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            // Remove 'active-btn' class from currently active button
            document.querySelector('.control.active-btn')?.classList.remove('active-btn');

            // Add 'active-btn' class to the clicked button
            this.classList.add('active-btn');

            // Hide all sections and activate the one matching the clicked button's data-id
            const id = this.dataset.id;
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            document.getElementById(id).classList.add('active');
        });
    });
}

// Initialize Page Transitions
PageTransitions();
