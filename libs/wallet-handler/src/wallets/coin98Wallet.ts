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
  id: 'coin98',
  name: 'Coin98 Wallet',
  iconUrl: '/assets/icons/wallets/coin98.png',
  iconBackground: '#fff',
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options: { shimDisconnect },
    }),
  })
});
