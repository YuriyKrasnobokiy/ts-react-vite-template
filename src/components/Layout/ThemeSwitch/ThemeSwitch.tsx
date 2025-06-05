import React, { useState } from 'react'
import { ThemeBtn, ThemeSwitchWrapper } from './ThemeSwitch.styled'
import { MdOutlineNightsStay, MdOutlineWbSunny } from "react-icons/md";

const ThemeSwitch: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  const themeChangeHandler: () => void = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeSwitchWrapper>
      <ThemeBtn onClick={themeChangeHandler}>
          {currentTheme === "dark" ? (
            <MdOutlineNightsStay />
          ) : (
            <MdOutlineWbSunny />
          )}
        </ThemeBtn>
    </ThemeSwitchWrapper>
  )
}

export default ThemeSwitch