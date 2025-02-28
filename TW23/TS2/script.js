const buttons = document.querySelectorAll('.color-button');
const colorBoxes = {
    'purple': document.getElementById('purple-box'),
    'pink': document.getElementById('pink-box'),
    'blue': document.getElementById('blue-box'),
    'green': document.getElementById('green-box'),
    'yellow': document.getElementById('yellow-box'),
    'orange': document.getElementById('orange-box'),
    'red': document.getElementById('red-box')
};

let currentBox = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        const newBox = colorBoxes[color];

        if (currentBox) {
            currentBox.style.setProperty('--pseudo-opacity', '1');
            currentBox.style.top = '-600px'; // Slide up previous box
        }

        newBox.style.setProperty('--pseudo-bg-color', color);
        newBox.style.setProperty('--pseudo-opacity', '1');
        newBox.style.top = '300px'; // Slide down new box

        setTimeout(() => {
            newBox.style.setProperty('--pseudo-opacity', '0');
        }, 200);

        currentBox = newBox;
    });
});

const style = document.createElement('style');
style.textContent = `
    .color-box::before {
        background-color: var(--pseudo-bg-color);
        opacity: var(--pseudo-opacity);
    }
`;
document.head.appendChild(style);