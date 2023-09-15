// JavaScript for the 5-star rating system
        function rateMovie(star, rating) {
            const stars = star.parentElement.querySelectorAll('.star');
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        }

        // JavaScript for button effects (hover)
        const buttons = document.querySelectorAll('.movie-buttons button');

        buttons.forEach((button) => {
            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = '#0056b3'; // Change background color on hover
            });

            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = '#007bff'; // Restore original background color
            });
        });