document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("main > div:not(.title)"); // Select all sections in the main
    const headerLinks = document.querySelectorAll(".headerContents p"); // Select all header links
    const offset = 500; // Adjust this value to fine-tune when the effect triggers

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect(); // Get the section's position relative to the viewport
        if (rect.top <= offset && rect.bottom > offset) {
            // Highlight the corresponding header link
            headerLinks.forEach((link) => link.classList.remove("active")); // Remove active class from all links
            headerLinks[index].classList.add("active"); // Add active class to the current link
        }
    });
});