// Get references to elements
const capitalElement = document.getElementById('capital');
const hideButton = document.getElementById('hideCapital');
const showButton = document.getElementById('showCapital');
const toggleButton = document.getElementById('toggle');
const hoverParagraph = document.querySelector('.hover');
const clickParagraph = document.getElementById('click');

// Function to hide the capital name (OTTAWA)
hideButton.addEventListener('click', function() {
    capitalElement.style.display = 'none';
});

// Function to show the capital name (OTTAWA)
showButton.addEventListener('click', function() {
    capitalElement.style.display = 'block';
});

// Function to toggle the visibility of the capital name (OTTAWA)
toggleButton.addEventListener('click', function() {
    if (capitalElement.style.display === 'none') {
        capitalElement.style.display = 'block';
    } else {
        capitalElement.style.display = 'none';
    }
});

// Function to change background color on hover
hoverParagraph.addEventListener('mouseover', function() {
    hoverParagraph.style.backgroundColor = 'yellow';
});

hoverParagraph.addEventListener('mouseout', function() {
    hoverParagraph.style.backgroundColor = ''; // Reset to default
});

// Function to change background color on click
clickParagraph.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});
