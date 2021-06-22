const bodyRef = document.querySelector('body')
const switchToggleRef = document.querySelector('#theme-switch-toggle')


switchToggleRef.addEventListener('change', onToggleClick)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


checkLocalStorage()
checkupBodyStyle()

function onToggleClick(e) {
  const checked = e.target.checked
  
  if (checked) {
    addedClassElement(Theme.DARK, Theme.LIGHT)
    localStorage.setItem('Theme', Theme.DARK,)
  }

  if (!checked) {
    addedClassElement(Theme.LIGHT, Theme.DARK)
    localStorage.setItem('Theme', Theme.LIGHT,)
  }
 }
 

function addedClassElement(add,remove) {
  bodyRef.classList.remove(remove)
  bodyRef.classList.add(add)
}

function checkLocalStorage() { 
  const localStor = localStorage.getItem('Theme')
 
  if (localStor) {
    bodyRef.classList.add(localStor)
  
  }
}

function checkupBodyStyle() {
 const value = bodyRef.classList.value
  if (value === Theme.DARK) {
    switchToggleRef.checked = true
  } else {
    switchToggleRef.checked = false
  }
}

