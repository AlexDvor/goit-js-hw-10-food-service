const bodyRef = document.querySelector('body')
const switchToggleRef = document.querySelector('#theme-switch-toggle')


switchToggleRef.addEventListener('change', onToggleClick)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// bodyRef.classList.add('light-theme')

function onToggleClick(e) {
  const checked = e.target.checked
  console.log(checked)
  // if (checked === true) {
  //   bodyRef.classList.add(DARK)
  // }

  // if (checked === false)
  //   bodyRef.classList.add(LIGHT)
 }
 




 

