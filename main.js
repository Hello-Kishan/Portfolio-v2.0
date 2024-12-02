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