console.log('Document Body: ');
console.log(document.body);


const yourGhost = document.querySelector('#your-ghost')
const ghostDescrip = document.querySelector('#ghost-desc')

const container = document.querySelector('.container');

let isFlipped = false

container.addEventListener('click', function (event) {
    const element = event.target
    


    if (element.matches('.character-box')) {
        if (isFlipped === false) {
            // const state = element.getAttribute('data-state')
            yourGhost.style.display = 'none'
            ghostDescrip.style.display = 'block'
        isFlipped === true

        }

        else {
            yourGhost.style.display = 'block'
            ghostDescrip.style.display = 'none'
        isFlipped === false
        }
        

        // if (state === 'hidden') {
        //     element.textContent = element.dataset.
        // }
    }
})