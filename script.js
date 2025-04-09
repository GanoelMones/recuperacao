document.getElementById('toggle-darkmode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});

document.getElementById('toggle-contrast').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
    document.querySelector('header').classList.toggle('high-contrast');
    document.querySelector('footer').classList.toggle('high-contrast');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.toggle('high-contrast');
    });
});
