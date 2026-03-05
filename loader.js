(function() {
    // Generate particles
    const particleContainer = document.getElementById('loaderParticles');
    if (particleContainer) {
        for (let i = 0; i < 28; i++) {
            const p = document.createElement('div');
            p.className = 'particle';

            const size = Math.random() * 4 + 2;
            const left = Math.random() * 100;
            const duration = Math.random() * 6 + 5;
            const delay = Math.random() * 4;
            const opacity = Math.random() * 0.6 + 0.3;

            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
                opacity: ${opacity};
                box-shadow: 0 0 ${size * 2}px rgba(212,165,116,0.6);
            `;
            particleContainer.appendChild(p);
        }
    }


    // Trigger SVG draw-in animations (staggered)
    const drawPaths = document.querySelectorAll('.draw-path');
    drawPaths.forEach((path, i) => {
        setTimeout(() => path.classList.add('animate'), i * 60 + 100);
    });

    // Dismiss loader after content loads (or max 3.5s)
    function dismissLoader() {
        const loader = document.getElementById('shilp-loader');
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => loader.remove(), 900);
        }
    }

    const maxWait = setTimeout(dismissLoader, 5000);

    window.addEventListener('load', function() {
        clearTimeout(maxWait);
        setTimeout(dismissLoader, 4000); // small extra polish delay
    });
})();