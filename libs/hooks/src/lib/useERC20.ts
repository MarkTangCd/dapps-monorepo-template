import { Contract } from "ethers";
import { useContract } from 'wagmi';
import { ERC20 } from '@dapps-monorepo/abis';

export function getTotalSupply() {
  const contract = useContract({
    address: '',
    abi: ERC20,
    signerOrProvider: null
  });
}