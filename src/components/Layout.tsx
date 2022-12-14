import type { FC } from 'react';
import Title from './Title';

interface LayoutProps {
  newTitle: string
  children: any
}

const Layout: FC<LayoutProps> = ({ newTitle, children }) => {
  return (
    <div className="flex flex-col w-2/3 bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 rounded-lg">
      <Title title={ newTitle } />
      <div className="p-5">
        { children }
      </div>
    </div>
  );
}
export default Layout;