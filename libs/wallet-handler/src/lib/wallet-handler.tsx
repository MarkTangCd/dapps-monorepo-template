import '@rainbow-me/rainbowkit/styles.css';

import { FC, ReactNode } from 'react';
import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet
} from '@rainbow-me/rainbowkit/wallets';
import { Chain, configureChains, createClient, WagmiConfig, ChainProviderFn } from 'wagmi';
import { StaticJsonRpcProvider, WebSocketProvider } from '@ethersproject/providers';

import coin98Wallet from '../wallets/coin98Wallet';
import bitkeepWallet from '../wallets/bitkeepWallet';
import mathWallet from '../wallets/mathWallet';
import safepalWallet from '../wallets/safepalWallet';

interface IProps {
  children: ReactNode;
  initChainID: number;
  supportChains: Chain[];
  providers: ChainProviderFn<StaticJsonRpcProvider, WebSocketProvider, Chain>[];
}

export const WalletProvider: FC<IProps>  = ({ children, initChainID, supportChains, providers }) => {
  const { chains, provider } = configureChains(
    supportChains,
    providers
  );

  const { wallets } = getDefaultWallets({
    appName: 'external params',
    chains
  });

  const connectors = connectorsForWallets([
    ...wallets,
    {
      groupName: 'Other',
      wallets: [
        argentWallet({ chains }),
        trustWallet({ chains }),
        ledgerWallet({ chains }),
        coin98Wallet({ chains }),
        bitkeepWallet({ chains }),
        mathWallet({ chains }),
        safepalWallet({ chains })
      ]
    }
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme()} initialChain={initChainID} chains={chains}>
        {
          children
        }
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default {
  WalletProvider,
};
