//checkbox
const checkbox = document.querySelector('.checkbox');
const boxValue = document.querySelector('.checkbox input')

    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('checked');
        
        const value = boxValue.value === '1' ? '0': '1';
        boxValue.value = value;
    });

// password visibilty
const eyeIcon = document.querySelector('.password i');
const input = document.querySelector('.password input');

    eyeIcon.addEventListener('click', () => {
        const icon = eyeIcon.innerHTML === 'visibility' ? 'visibility_off' : 'visibility';
        eyeIcon.innerHTML = icon;

        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
    });


