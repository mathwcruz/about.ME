// EFEITO MÁQUINA DE ESCREVER
function typeWriter (element) {
  const textArray = element.innerHTML.split('')
  element.innerHTML = ''
  textArray.forEach((letter, i) => {
    setTimeout(() => element.innerHTML += letter, 230 * i)
  })
}

const machine_effect = document.querySelector('#machine-title')
typeWriter(machine_effect)

// BOTÃO TOPO DA PÁGINA
window.onscroll = function () {
  scroll()
}
function scroll () {
  let button = document.getElementById("button-top")
  if (document.documentElement.scrollTop > 50) {
    button.style.display = "block"
  }else {
    button.style.display = "none"
  }
}

function backToTop () {
  document.documentElement.scrollTop = 0
}