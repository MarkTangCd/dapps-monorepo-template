import { render } from '@testing-library/react';

import WalletHandler from './wallet-handler';

describe('WalletHandler', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WalletHandler />);
    expect(baseElement).toBeTruthy();
  });
});
