import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

interface ToogleThemeContainerProps {
  activateIcon: React.ReactNode
  desactivateIcon: React.ReactNode
  className: string,
  callback?: () => {},
  startValue?:boolean
}

interface ToogleThemeVariation extends Omit<ToogleThemeContainerProps, "activateIcon" | "desactivateIcon"|"className"> {

}

interface TogleThemeComponent extends ToogleThemeVariation {
  variation?: keyof typeof ToogleThemeVariations;
}

const ToogleThemeVariations = {
  default: (props: ToogleThemeVariation) =>
    <ToogleThemeContainer
      callback={props.callback}
      activateIcon={<Sun className='w-1/2' />}
      desactivateIcon={<Moon className='w-1/2' />}
      className='rounded-full w-14 bg-white dark:bg-zinc-200 p-1 flex items-center transition duration-300 focus:outline-none shadow'
    />,
}

function ToogleThemeContainer(props: ToogleThemeContainerProps) {
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

function ToogleTheme(props: TogleThemeComponent) {
  const Component = ToogleThemeVariations[props.variation??"default"] 
  return <Component {...props} />;
}

export {
  ToogleTheme
}