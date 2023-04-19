const bob = document.querySelector('.bob')
const pipe = document.querySelector('.pipe')

const jump = () => {
  bob.classList.add('jump')

  setTimeout(() => {
    bob.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft
  const bobPosition = +window.getComputedStyle(bob).bottom.replace('px', '')

  if (pipePosition <= 111 && pipePosition > 0 && bobPosition < 77) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    bob.style.animation = 'none'
    bob.style.bottom = `${bobPosition}px`

    bob.src = './images/over.png'
    bob.style.width = '75px'
    bob.style.marginLeft = '39px'

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)
