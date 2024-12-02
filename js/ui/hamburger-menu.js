export const setupHamburgerMenu = (hamburger, navLinks) => {
    try {
        if (!hamburger || !navLinks) {
            throw new Error("Missing hamburger or navigation elements.");
        }

        const toggleMenu = (isOpen) => {
            navLinks.classList.toggle('active', isOpen);
            hamburger.innerHTML = isOpen ? '&times;' : '&#9776;';
            hamburger.classList.toggle('is-active', isOpen);
        };

        hamburger.addEventListener('click', () => {
            const isActive = navLinks.classList.contains('active');
            toggleMenu(!isActive);
        });

        // Handle clicks on individual navigation links
        document.querySelectorAll('.nav-links a').forEach(item => {
            item.addEventListener('click', (event) => {
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                event.target.classList.add('active');
                toggleMenu(false);
            });
        });
    } catch (error) {
        console.error("Error setting up hamburger menu:", error);
        alert("Sorry, there was an issue setting up the menu. Please reload the page.");
    }
};
