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
  id: 'math',
  name: 'Math Wallet',
  iconUrl: '/assets/icons/wallets/math_wallet.svg',
  iconBackground: '#fff',
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options: { shimDisconnect },
    }),
  })
});
