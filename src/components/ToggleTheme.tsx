import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

interface ToogleThemeContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  activateIcon: React.ReactNode
  desactivateIcon: React.ReactNode
  callback: () => {}
}

interface ToogleThemeProps extends Omit<ToogleThemeContainerProps, "activateIcon" | "desactivateIcon"> {
  variation: keyof typeof ToogleThemeVariations;
}

const ToogleThemeVariations = {
  default: (props: ToogleThemeProps) =>
    <ToogleThemeContainer
      {...props}
      activateIcon={<Sun className='w-1/2' />}
      desactivateIcon={<Moon className='w-1/2' />}
      className='rounded-full w-16 bg-white dark:bg-zinc-700 flex items-center transition duration-300 focus:outline-none shadow'
    />,
}

function ToogleThemeContainer(_: ToogleThemeContainerProps) {
  const [isDarkmode, setIsDarkmode] = useState(false);

  function handleToggle() {
    setIsDarkmode(!isDarkmode)
    _.callback() ?? null
  }

  return (
    <button className={_.className} onClick={handleToggle} >
      <div style={{ width: isDarkmode ? "0%" : "50%" }} className="first-line:transition duration-500" />
      {isDarkmode ? _.desactivateIcon : _.activateIcon}
    </button>
  );
}

function ToogleTheme(props: ToogleThemeProps) {
  const Component = ToogleThemeVariations[props.variation] || ToogleThemeVariations.default;
  return <Component {...props} />;
}

export {
  ToogleTheme
}