import React from 'react';

interface ButtonContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingComponent?: React.ReactNode;
}

interface ButtonVariation extends Omit<ButtonContainerProps, "className"> {
 
}

interface ButtonComponent extends ButtonVariation {
  variation: keyof typeof buttonVariations;
}

const buttonVariations = {
  green: (props: ButtonVariation) =>
    <ButtonContainer {...props} className='bg-green-500' />,
  red: (props: ButtonVariation) =>
    <ButtonContainer {...props} className='bg-red-500' />,
  default: (props: ButtonVariation) =>
    <ButtonContainer {...props} className='bg-red-500' />,
}

function ButtonContainer(_: ButtonContainerProps) {
  return (
    <button {..._}>
      {_.loading ? _.loadingComponent : _.children}
    </button>
  );
}

function Button(props: ButtonComponent) {
  const Component = buttonVariations[props.variation] || buttonVariations.default;
  return <Component {...props} />;
}

export {
  ButtonComponent,
  Button
};
