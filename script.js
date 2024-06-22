function sendEmail () {
    window.location = "mailto:udayagarwal234@gmail.com"
}

const sections = document.querySelectorAll('.content');

// For first section transition of webpage -> 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {threshold: 0.5});

sections.forEach((section) => {
    observer.observe(section);
});

//For responsive website
async function main() {
    //Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".sidebar").style.left = "0";
    })

    //Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".sidebar").style.left = "-100%";
    })
}

main();