import './tailwind.css'


let tabs = document.querySelectorAll('.tab')
let indicator = document.querySelector('.indicator')
let btn1 = document.getElementById('panel-1-btn')
let btn2 = document.getElementById('panel-2-btn')
let btn3 = document.getElementById('panel-3-btn')
let panels = document.querySelectorAll('.tab-panel')

drawIndicator(tabs[0]);
window.onresize = drawIndicator(tabs[0])

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    let tabTarget = tab.getAttribute('aria-controls')

    drawIndicator(tab);
    window.onresize = () => drawIndicator(tab);

    panels.forEach(panel => {
      let panelId = panel.getAttribute('id')
      if (tabTarget === panelId) {
        panel.classList.remove('invisible', 'opacity-0')
        panel.classList.add('visible', 'opacity-100')
        styleSelectedTab(panelId)
      } else {
        panel.classList.add('invisible', 'opacity-0')
      }
    })
  })
})


function drawIndicator(tabID) {
  indicator.style.width = tabID.getBoundingClientRect().width + 'px'
  indicator.style.left =
      tabID.getBoundingClientRect().left -
      tabID.parentElement.getBoundingClientRect().left +
      'px'
}

function styleSelectedTab(id) {
  if (id.includes('1')) {
      btn1.classList.add('text-white')
      btn2.classList.remove('text-white')
      btn3.classList.remove('text-white')
  }
  if (id.includes('2')) {
      btn1.classList.remove('text-white')
      btn2.classList.add('text-white')
      btn3.classList.remove('text-white')
  }
  if (id.includes('3')) {
    btn1.classList.remove('text-white')
    btn2.classList.remove('text-white')
    btn3.classList.add('text-white')
}
}