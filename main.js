import './tailwind.css'
import { setupCounter } from './counter.js'

let tabs = document.querySelectorAll('.tab')
let indicator = document.querySelector('.indicator')
let panels = document.querySelectorAll('.tab-panel')

drawIndicator(tabs[0]);

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    let tabTarget = tab.getAttribute('aria-controls')

    drawIndicator(tab);

    panels.forEach(panel => {
      let panelId = panel.getAttribute('id')
      if (tabTarget === panelId) {
        panel.classList.remove('invisible', 'opacity-0')
        panel.classList.add('visible', 'opacity-100')
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