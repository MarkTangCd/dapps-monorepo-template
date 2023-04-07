import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  const router = useRouter();
  useAccount({
    onConnect({ isReconnected }) {
      if (!isReconnected) router.reload();
    }
  });

  return (
    <div>
      { children }
    </div>
  );
}

export default MainLayout;