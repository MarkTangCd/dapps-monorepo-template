import { getAddress } from '@ethersproject/address';
import { AddressZero } from '@ethersproject/constants';

export function isAddress(value: any): string | false {
  try {
    return getAddress(value.toLowerCase())
  } catch {
    return false
  }
}

export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

export default function isZero(hexNumberString: string) {
  return /^0x0*$/.test(hexNumberString)
}

