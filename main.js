var typed= new Typed(".text", {
    strings: ["Backend Developer", "Frontend Developer", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 300,
    loop: true
})


window.onload = function() {
    setTimeout(function() {
        const img = document.getElementById('img');
        img.classList.add('visible'); // Add 'visible' class to show the image
    }, 2000); // Delay of 5 seconds
};

const background = document.querySelector('.background');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event; // Get cursor position

    // Calculate cursor's position as a percentage of window width/height
    const x = (clientX / window.innerWidth - 0.5) * 5; // Range: -1 to 1
    const y = (clientY / window.innerHeight - 0.5) * 5; // Range: -1 to 1

    // Adjust the background position based on cursor movement
    const moveX = x * 5; // Horizontal movement range
    const moveY = y * 5; // Vertical movement range

    // Apply movement to background-position
    background.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
});

