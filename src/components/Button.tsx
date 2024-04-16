import React from 'react';

interface ButtonContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingComponent?: React.ReactNode;
}

interface ButtonProps extends Omit<ButtonContainerProps, "className"> {
  variation: keyof typeof buttonVariations;
}

const buttonVariations = {
  green: (props: ButtonProps) =>
    <ButtonContainer {...props} className='bg-green-500' />,
  red: (props: ButtonProps) =>
    <ButtonContainer {...props} className='bg-red-500' />,
  default: (props: ButtonProps) =>
    <ButtonContainer {...props} className='bg-red-500' />,
}

function ButtonContainer(_: ButtonContainerProps) {
  return (
    <button {..._}>
      {_.loading ? _.loadingComponent : _.children}
    </button>
  );
}

function Button(props: ButtonProps) {
  const Component = buttonVariations[props.variation] || buttonVariations.default;
  return <Component {...props} />;
}

export {
  ButtonProps,
  Button
};
