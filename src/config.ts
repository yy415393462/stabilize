import { ChainId } from '@uniswap/sdk';
import { Configuration } from './basis-cash/config';
import { BankInfo } from './basis-cash';
import { formatUnits } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.KOVAN,
    etherscanUrl: 'https://kovan.etherscan.io/',
    defaultProvider: 'https://kovan.infura.io/v3/9ff09f1a3c284d28830665290dab81c5', //'https://mainnet.infura.io/v3/06ecf536272c43c78adfba29b908a68d',
    deployments: require('./basis-cash/deployments/deployments.mainnet.json'),
    externalTokens: {
      DAI: ['0xa29b54508a209cebbd10f86dcb292dd4f3137d11', 18],
      'BAC_DAI-UNI-LPv2': ['0x074aa982FefA606a1E8E41399e8f409d3691833D', 18],
      'BAS_DAI-UNI-LPv2': ['0x79e9BA7fc9FbB6dbEf0177c8cb988D10D26F0C5B', 18],
      USDT: ['0xc9B09367146b7ec320C2faDB8a1C6429174386b3',6]
    },
    baseLaunchDate: new Date('2020-11-26T00:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
    gasLimitMultiplier: 1.1,
  },
  production: {
    chainId: ChainId.MAINNET,
    etherscanUrl: 'https://etherscan.io',
    defaultProvider: 'https://mainnet.infura.io/v3/06ecf536272c43c78adfba29b908a68d',
    deployments: require('./basis-cash/deployments/deployments.mainnet.json'),
    externalTokens: {
      DAI: ['0x6B175474E89094C44Da98b954EedeAC495271d0F', 18],
      yCRV: ['0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8', 18],
      SUSD: ['0x57Ab1E02fEE23774580C119740129eAC7081e9D3', 18],
      USDC: ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6],
      USDT: ['0xdAC17F958D2ee523a2206206994597C13D831ec7', 6],
      'BAC_DAI-UNI-LPv2': ['0x5aE0bB5Cb1acF7Db98edC9d2F37CB3cF4B8b38D9', 18],
      'BAS_DAI-UNI-LPv2': ['0x457BC4dD576f659d52e13F9a4b0bcD63CBebe2d4', 18],
    },
    baseLaunchDate: new Date('2020-11-29T23:00:00Z'),
    bondLaunchesAt: new Date('2020-12-05T00:00:00Z'),
    boardroomLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 30000,
    gasLimitMultiplier: 1.7,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
/*   BACDAIPool: {
    name: 'Earn BAC by DAI',
    contract: 'BACDAIPool',
    depositTokenName: 'DAI',
    earnTokenName: 'BAC',
    finished: true,
    sort: 3,
  },
  BACUSDCPool: {
    name: 'Earn BAC by USDC',
    contract: 'BACUSDCPool',
    depositTokenName: 'USDC',
    earnTokenName: 'BAC',
    finished: true,
    sort: 4,
  },
  BACSUSDPool: {
    name: 'Earn BAC by sUSD',
    contract: 'BACSUSDPool',
    depositTokenName: 'SUSD',
    earnTokenName: 'BAC',
    finished: true,
    sort: 5,
  }, */
  BACUSDTPool: {
    name: 'Earn DNC by USDT',
    contract: 'BACUSDCPool',
    depositTokenName: 'USDT',
    earnTokenName: 'DNC',
    finished: true,
    sort: 6,
  },
 /*  BACyCRVPool: {
    name: 'Earn BAC by yCRV',
    contract: 'BACyCRVPool',
    depositTokenName: 'yCRV',
    earnTokenName: 'BAC',
    finished: true,
    sort: 7,
  }, */
  DAIBACLPTokenSharePool: {
    name: 'Earn DNS by DNC_DAI-LP',
    contract: 'DAIBACLPTokenSharePool',
    depositTokenName: 'BAC_DAI-UNI-LPv2',
    earnTokenName: 'DNS',
    finished: false,
    sort: 1,
  },
  DAIBASLPTokenSharePool: {
    name: 'Earn DNS by DNS_DAI-LP',
    contract: 'DAIBASLPTokenSharePool',
    depositTokenName: 'BAS_DAI-UNI-LPv2',
    earnTokenName: 'DNS',
    finished: false,
    sort: 2,
  },
};

export default configurations[process.env.NODE_ENV || "development"];
