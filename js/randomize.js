document.addEventListener("DOMContentLoaded", function() {
        var container = document.getElementById("figure-container");
        var figures = Array.from(container.getElementsByTagName("figure"));
        
        // Shuffle the figures array
        for (let i = figures.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [figures[i], figures[j]] = [figures[j], figures[i]];
        }

        // Remove all existing figures
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // Append the shuffled figures back to the container
        figures.forEach(function(figure) {
            container.appendChild(figure);
        });
    });
