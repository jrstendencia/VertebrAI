function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
}


window.onload = function() {
    showSection('login');
};

function handleLogin(event) {
    event.preventDefault();
    showSection('home');
}

function handleRegister(event) {
    event.preventDefault();
    showSection('home');
}

function logout() {
    showSection('login');
}
