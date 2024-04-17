import React from 'react';

interface ButtonContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingComponent?: React.ReactNode;
}

interface ButtonVariation extends Omit<ButtonContainerProps, "className"> {
 
}

interface ButtonComponent extends ButtonVariation {
  variation?: keyof typeof buttonVariations;
}

const buttonVariations = {
  default: (props: ButtonVariation) =>
    <ButtonContainer {...props} className='bg-red-500 w-full rounded p-1' />,
}

function ButtonContainer(_: ButtonContainerProps) {
  return (
    <button {..._}>
      {_.loading ? _.loadingComponent : _.children}
    </button>
  );
}

function Button(props: ButtonComponent) {
  const Component = buttonVariations[props.variation??"default"] 
  return <Component {...props} />;
}

export {
  Button
};
