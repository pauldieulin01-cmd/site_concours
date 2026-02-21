document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".menu-link");
    const sections = document.querySelectorAll(".toggle-section");
    const backdrop = document.getElementById("backdrop");

    const closeAll = () => {
        sections.forEach(s => s.classList.remove("active"));
        document.querySelectorAll(".arrow").forEach(a => a.classList.remove("rotate"));
        backdrop.classList.remove("active");
    };

    links.forEach(link => link.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        const section = document.getElementById(link.dataset.target);
        const arrow = link.querySelector(".arrow");
        const isOpening = !section.classList.contains("active");

        closeAll(); // fermer tout

        if (isOpening) {
            section.classList.add("active");
            backdrop.classList.add("active");
            arrow?.classList.add("rotate"); // le "?" évite les erreurs si arrow n'existe pas
        }
    }));

    backdrop.addEventListener("click", closeAll);

    document.addEventListener("click", e => {
        if (!e.target.closest(".menu-link") && !e.target.closest(".toggle-section")) closeAll();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".menu-link");
    const sections = document.querySelectorAll(".toggle-section");
    const backdrop = document.getElementById("backdrop");
    const arrows = document.querySelectorAll(".arrow");

    // Menu burger
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    menuToggle?.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Fermer tout
    const closeAll = () => {
        sections.forEach(s => s.classList.remove("active"));
        arrows.forEach(a => a.classList.remove("rotate"));
        backdrop.classList.remove("active");
    };

    // Liens popups
    links.forEach(link => link.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        const section = document.getElementById(link.dataset.target);
        const arrow = link.querySelector(".arrow");
        const isOpening = !section.classList.contains("active");

        closeAll();

        if (isOpening) {
            section.classList.add("active");
            backdrop.classList.add("active");
            arrow?.classList.add("rotate");
        }
    }));

    // Clic sur backdrop
    backdrop.addEventListener("click", closeAll);

    // Clic ailleurs ferme tout
    document.addEventListener("click", e => {
        if (!e.target.closest(".menu-link") && !e.target.closest(".toggle-section") && !e.target.closest(".menu-toggle")) {
            closeAll();
            nav.classList.remove("active"); // fermer menu burger
        }
    });
});







const input = document.createElement('input');
input.type = "text";
input.id = "userAnswer";
input.placeholder = "Écris ta réponse ici";
input.className = "answer-input btn-primary"; // On peut aussi ajouter btn-primary si tu veux
answersContainer.appendChild(input);

