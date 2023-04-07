import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSnackbar } from 'notistack';
import styles from './index.module.scss';

export function Index() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <ConnectButton />
      </div>
      <div>
        <button onClick={() => enqueueSnackbar('Sign Transaction Fail', { variant: "error" })}>Sign Fail</button>
        <button onClick={() => enqueueSnackbar('Sign Transaction Fail', { variant: "success" })}>Sign Success</button>
        <button onClick={() => enqueueSnackbar('Sign Transaction Fail', { variant: "info" })}>Notification</button>
      </div>
    </div>
  );
}

export default Index;
