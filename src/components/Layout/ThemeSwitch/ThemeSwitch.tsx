import React from 'react'
import { ThemeBtn, ThemeSwitchWrapper } from './ThemeSwitch.styled'
import { MdOutlineNightsStay, MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from '../../../hooks/useTheme';

const ThemeSwitch: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ThemeSwitchWrapper>
      <ThemeBtn onClick={toggleTheme}>
          {isDark ? (
            <MdOutlineWbSunny />
          ) : (
            <MdOutlineNightsStay />
          )}
        </ThemeBtn>
    </ThemeSwitchWrapper>
  )
}

export default ThemeSwitch;