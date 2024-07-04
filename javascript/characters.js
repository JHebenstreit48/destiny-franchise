console.log('Document Body: ');
console.log(document.body);


const yourGhost = document.querySelector('#your-ghost')
const ghostDescrip = document.querySelector('#ghost-desc')

const container = document.querySelector('.container');


container.addEventListener('click', function (event) {
    const element = event.target
    console.log(element);

    if (element.matches('.character-box'))  {

        let isFlipped =  element.getAttribute('data-flipped');
        isFlipped = JSON.parse(isFlipped);

        if (!isFlipped) {
            element.textContent = element.getAttribute('data-back')
            element.setAttribute('data-flipped', 'true')

        } else {
            element.textContent = element.getAttribute('data-front')
            element.setAttribute('data-flipped', 'false')
        }
        }
})