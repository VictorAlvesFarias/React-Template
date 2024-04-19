import { LucideLoaderCircle } from 'lucide-react';
import React from 'react';

interface ButtonContainerProps {
  loading?: boolean;
  loadingComponent?: React.ReactNode;
  children: React.ReactNode,
  className: string
}

interface ButtonVariation extends Omit<ButtonContainerProps, "className"|"loadingComponent"> {

}

interface ButtonComponent extends ButtonVariation {
  variation?: keyof typeof buttonVariations;
}

const buttonVariations = {
  default: (props: ButtonVariation) =>
    <ButtonContainer
      {...props}
      loadingComponent={
        <LucideLoaderCircle className='w-6 h-6 rotating-div' />
      }
      className='bg-green-500 w-full rounded p-1 text-zinc-50 font-semibold flex justify-center items-center' />,
}

function ButtonContainer(_: ButtonContainerProps) {
  return (
    <button {..._}>
      {_.loading ? _.loadingComponent : _.children}
    </button>
  );
}

function Button(props: ButtonComponent) {
  const Component = buttonVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

export {
  Button
};
