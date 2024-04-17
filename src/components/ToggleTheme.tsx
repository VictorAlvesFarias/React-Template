import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

interface ToogleThemeContainerProps {
  activateIcon: React.ReactNode
  desactivateIcon: React.ReactNode
  className: string,
  callback: () => {}
}

interface ToogleThemeVariation extends Omit<ToogleThemeContainerProps, "activateIcon" | "desactivateIcon"|"className"> {

}

interface TogleThemeComponent extends ToogleThemeVariation {
  variation: keyof typeof ToogleThemeVariations;
}

const ToogleThemeVariations = {
  default: (props: ToogleThemeVariation) =>
    <ToogleThemeContainer
      callback={props.callback}
      activateIcon={<Sun className='w-1/2' />}
      desactivateIcon={<Moon className='w-1/2' />}
      className='rounded-full w-16 bg-white dark:bg-zinc-700 flex items-center transition duration-300 focus:outline-none shadow'
    />,
}

function ToogleThemeContainer(props: ToogleThemeContainerProps) {
  const [isDarkmode, setIsDarkmode] = useState(false);

  function handleToggle() {
    setIsDarkmode(!isDarkmode)
    props.callback() ?? null
  }

  return (
    <button className={props.className} onClick={handleToggle} >
      <div style={{ width: isDarkmode ? "0%" : "50%" }} className="first-line:transition duration-500" />
      {isDarkmode ? props.desactivateIcon : props.activateIcon}
    </button>
  );
}

function ToogleTheme(props: TogleThemeComponent) {
  const Component = ToogleThemeVariations[props.variation] || ToogleThemeVariations.default;
  return <Component {...props} />;
}

export {
  ToogleTheme
}