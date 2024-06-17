import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';
import useSelector from '../utils/hooks/use-selector';

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

const toogleThemeVariations = {
  default: (props: ToogleThemeProps) =>
    <ToogleThemeContainer
      callback={props.callback}
      activateIcon={<Sun className='w-1/2' />}
      desactivateIcon={<Moon className='w-1/2' />}
      className='rounded-full w-14 bg-white dark:bg-zinc-200 p-1 flex items-center transition duration-300 focus:outline-none shadow'
    />,
}

const ToogleTheme = useSelector<keyof typeof toogleThemeVariations,ToogleThemeProps>(toogleThemeVariations)

export default ToogleTheme