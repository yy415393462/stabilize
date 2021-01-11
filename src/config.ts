import { ChainId } from '@uniswap/sdk';
import { Configuration } from './basis-cash/config';
import { BankInfo } from './basis-cash';
import { formatUnits } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.KOVAN,
    etherscanUrl: 'https://kovan.etherscan.io',
    defaultProvider: 'https://kovan.infura.io/v3/9ff09f1a3c284d28830665290dab81c5', //'https://mainnet.infura.io/v3/06ecf536272c43c78adfba29b908a68d',
    deployments: require('./basis-cash/deployments/deployments.kovan.json'),
    externalTokens: {
      DAI: ['0x82ED4E84BC74B1A52EC1A7771D6A13eED7A8aC6e', 18],
      'BAC_DAI-UNI-LPv2': ['0x2F057FF78258E51a829025Ea0CE685A1772a4FE4', 18],
      'BAS_DAI-UNI-LPv2': ['0xa1655Bd897fe5f5549c17e23D32Adae06753C2Cc', 18],
      USDT: ['0x7855c49b1147bce38ce1708c2a06b64c1560cb12',6]
    },
    baseLaunchDate: new Date('2021-01-06T00:00:00Z'),
    bondLaunchesAt: new Date('2021-01-06T00:00:00Z'),
    boardroomLaunchesAt: new Date('2021-01-06T00:00:00Z'),
    refreshInterval: 10000,
    gasLimitMultiplier: 1.1,
  },
  production: {
    chainId: ChainId.KOVAN,
    etherscanUrl: 'https://kovan.etherscan.io',
    defaultProvider: 'https://kovan.infura.io/v3/9ff09f1a3c284d28830665290dab81c5', //'https://mainnet.infura.io/v3/06ecf536272c43c78adfba29b908a68d',
    deployments: require('./basis-cash/deployments/deployments.kovan.json'),
    externalTokens: {
      DAI: ['0x82ED4E84BC74B1A52EC1A7771D6A13eED7A8aC6e', 18],
      'BAC_DAI-UNI-LPv2': ['0x2F057FF78258E51a829025Ea0CE685A1772a4FE4', 18],
      'BAS_DAI-UNI-LPv2': ['0xa1655Bd897fe5f5549c17e23D32Adae06753C2Cc', 18],
      USDT: ['0x7855c49b1147bce38ce1708c2a06b64c1560cb12',6]
    },
    baseLaunchDate: new Date('2021-01-06T00:00:00Z'),
    bondLaunchesAt: new Date('2021-01-06T00:00:00Z'),
    boardroomLaunchesAt: new Date('2021-01-06T00:00:00Z'),
    refreshInterval: 10000,
    gasLimitMultiplier: 1.1,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  NBCDAIPool: {
    name: 'Earn NBC by DAI',
    contract: 'NBCDAIPool',
    depositTokenName: 'DAI',
    earnTokenName: 'BAC',
    finished: false,
    sort: 3,
  },
  /* BACUSDCPool: {
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
  NBCUSDTPool: {
    name: 'Earn NBC by USDT',
    contract: 'NBCUSDTPool',
    depositTokenName: 'USDT',
    earnTokenName: 'BAC',
    finished: false,
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
  DAINBCLPTokenSharePool: {
    name: 'Earn NBS by NBC_DAI-LP',
    contract: 'DAINBCLPTokenSharePool',
    depositTokenName: 'BAC_DAI-UNI-LPv2',
    earnTokenName: 'BAS',
    finished: false,
    sort: 1,
  },
  DAINBSLPTokenSharePool: {
    name: 'Earn NBS by NBS_DAI-LP',
    contract: 'DAINBSLPTokenSharePool',
    depositTokenName: 'BAS_DAI-UNI-LPv2',
    earnTokenName: 'BAS',
    finished: false,
    sort: 2,
  },
};

export default configurations[process.env.NODE_ENV || "development"];
