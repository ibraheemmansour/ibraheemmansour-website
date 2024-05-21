const texts = ['Full-Stack Software Developer', 'Computer & Communications Engineer', 'Writer', 'Foodie', 'Bookworm', 'Cinephile', 'Hiker'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (typeof window !== 'undefined') {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
    
        document.getElementById('animated-text').textContent = letter;
    
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(() => {
                setTimeout(type, 100);
            }, 1200); // 100ms delay before calling the function again
        } else {
            setTimeout(type, 100);
        }
    } 
}());