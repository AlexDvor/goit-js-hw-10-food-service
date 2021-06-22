const bodyRef = document.querySelector('body')
const switchToggleRef = document.querySelector('#theme-switch-toggle')


switchToggleRef.addEventListener('change', onToggleClick)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};




function onToggleClick(e) {
  const checked = e.target.checked
  
  if (checked) {
    checkClassElement(Theme.DARK, Theme.LIGHT)
  
  }

  if (!checked) {
   checkClassElement(Theme.LIGHT,Theme.DARK)
  }

 }
 





 
function checkClassElement(add,remove) {
  bodyRef.classList.remove(remove)
  bodyRef.classList.add(add)
}



 

