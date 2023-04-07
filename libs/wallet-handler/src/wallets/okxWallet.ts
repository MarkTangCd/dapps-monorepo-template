import { InjectedConnector } from 'wagmi/connectors/injected';
import { Chain, Wallet } from '@rainbow-me/rainbowkit';

export interface CustomWalletOptions {
  chains: Chain[];
  shimDisconnect?: boolean;
}

export default ({
  chains,
  shimDisconnect,
}: CustomWalletOptions): Wallet => ({
  id: 'safepal',
  name: 'SafePal Wallet',
  iconUrl: '/assets/icons/wallets/safepal_wallet.png',
  iconBackground: '#fff',
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options: { shimDisconnect },
    }),
  })
});
