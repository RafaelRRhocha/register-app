import type { FC } from 'react';

interface ButtonProps {
  children: any
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <div className="flex justify-end">
      <button className="p-4 mb-4 btn btn-success hover:text-white">
        {children}
      </button>
    </div>
  );
}

export default Button;