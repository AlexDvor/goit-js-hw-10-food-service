const bodyRef = document.querySelector('body')
const switchToggleRef = document.querySelector('#theme-switch-toggle')


switchToggleRef.addEventListener('change', onToggleClick)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


checkLocalStorage()
checkBodyClass()

function onToggleClick(e) {
  const checked = e.target.checked
  
  if (checked) {
    changesClassElement(Theme.DARK, Theme.LIGHT)
    addKeyInLocalStorage ('Theme', Theme.DARK)
  }

  if (!checked) {
    changesClassElement(Theme.LIGHT, Theme.DARK)
    addKeyInLocalStorage ('Theme', Theme.LIGHT)
  }
 }
 
function changesClassElement(add,remove) {
  bodyRef.classList.remove(remove)
  bodyRef.classList.add(add)
}

function checkLocalStorage() { 
  const localStor = localStorage.getItem('Theme')
 
  if (localStor) {
    bodyRef.classList.add(localStor)
  }
}

function checkBodyClass() {
 const value = bodyRef.classList.value
  if (value === Theme.DARK) {
    switchToggleRef.checked = true
  } else {
    switchToggleRef.checked = false
  }
}

function addKeyInLocalStorage(key,value) {
 localStorage.setItem(key, value)
}
