import type { FC } from 'react';
import DarkMode from './DarkMode';

interface TitleProps {
  title: string
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <>
      <div className="flex justify-between p-2">
        <h1 className="p-2">{ title }</h1>
        <DarkMode />
      </div>
      <hr className="border-2 border-violet-600" />
    </>
  );
}
export default Title;