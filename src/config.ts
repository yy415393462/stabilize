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
      DAI: ['0x7855c49b1147bce38ce1708c2a06b64c1560cb12', 6],
      'BAC_DAI-UNI-LPv2': ['0xe8D04721D84Ef1eb2efd001Cc936AddB254EE1c7', 18],
      'BAS_DAI-UNI-LPv2': ['0x66481f04396DC66D5693cb71C3577Ef52D3A2f5f', 18],
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
    etherscanUrl: 'https://kovan.etherscan.io/',
    defaultProvider: 'https://kovan.infura.io/v3/9ff09f1a3c284d28830665290dab81c5', //'https://mainnet.infura.io/v3/06ecf536272c43c78adfba29b908a68d',
    deployments: require('./basis-cash/deployments/deployments.mainnet.json'),
    externalTokens: {
      DAI: ['0x7855c49b1147bce38ce1708c2a06b64c1560cb12', 6],
      'BAC_DAI-UNI-LPv2': ['0xe8D04721D84Ef1eb2efd001Cc936AddB254EE1c7', 18],
      'BAS_DAI-UNI-LPv2': ['0x66481f04396DC66D5693cb71C3577Ef52D3A2f5f', 18],
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
  AICUSDTPool: {
    name: 'Earn AIC by USDT',
    contract: 'AICUSDTPool',
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
  DAIAICLPTokenSharePool: {
    name: 'Earn AIS by AIC_DAI-LP',
    contract: 'DAIAICLPTokenSharePool',
    depositTokenName: 'BAC_DAI-UNI-LPv2',
    earnTokenName: 'BAS',
    finished: false,
    sort: 1,
  },
  DAIAISLPTokenSharePool: {
    name: 'Earn AIS by AIs_DAI-LP',
    contract: 'DAIAISLPTokenSharePool',
    depositTokenName: 'BAS_DAI-UNI-LPv2',
    earnTokenName: 'BAS',
    finished: false,
    sort: 2,
  },
};

export default configurations[process.env.NODE_ENV || "development"];
