import type { FC } from 'react';

interface ButtonProps {
  color?: 'btn-success' | 'btn-info' | 'btn-warning'
  children: any
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, color, onClick }) => {
  return (
    <div className="flex justify-end">
      <button onClick={ onClick } className={`p-4 mb-4 btn ${ color ?? 'btn-success' } hover:text-white`}>
        {children}
      </button>
    </div>
  );
}

export default Button;