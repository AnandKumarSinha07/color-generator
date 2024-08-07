import React from 'react'
import './theme.css'

import useLocalStorage from './useLocalStorage'

function ThemeMode() {


  const [theme,setTheme]=useLocalStorage('theme',"dark")

  function handleToggle(){
    setTheme(theme==='light'?'dark':'light');

  }
  console.log(theme);
  
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggle}>Change Theme</button>
      </div>
    </div>
  )
}

export default ThemeMode