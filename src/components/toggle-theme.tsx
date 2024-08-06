import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';
import { useSelector } from '../utils/hooks/selector-hooks';

interface ToogleThemeProps {
  activateIcon: React.ReactNode
  desactivateIcon: React.ReactNode
  className: string,
  callback?: () => {},
  startValue?:boolean
}

function ToogleThemeContainer(props: ToogleThemeProps) {
  const [isDarkmode, setIsDarkmode] = useState(props.startValue);

  function handleToggle() {
    setIsDarkmode(!isDarkmode)
    props.callback? props.callback() : null
  }

  return (
    <button className={props.className} onClick={handleToggle} >
      <div style={{ width: isDarkmode ? "0%" : "50%" }} 
      className="first-line:transition duration-500" />
      {isDarkmode ? props.desactivateIcon : props.activateIcon}
    </button>
  );
}

export default ToogleThemeContainer