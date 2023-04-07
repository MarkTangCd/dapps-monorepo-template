import { AppProps } from 'next/app';
import { polygonMumbai, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { SnackbarProvider } from 'notistack';
import { WalletProvider } from '@dapps-monorepo/wallet-handler';
import MainLayout from '../layout/MainLayout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <WalletProvider
          supportChains={[goerli, polygonMumbai]}
          providers={[alchemyProvider({ apiKey: '' }), publicProvider()]}
          initChainID={goerli.id}
        >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </WalletProvider>
      </SnackbarProvider>
    </>
  );
}

export default CustomApp;
