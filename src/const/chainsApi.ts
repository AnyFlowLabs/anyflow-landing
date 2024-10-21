export interface ChainDef {
  id: number;
  created_at: string;
  updated_at: string;
  chain_id: number;
  name: string;
  ticker: string;
  ticker_src: string;
  is_testnet: number;
  is_enabled: number;
  is_available: boolean;
  deployers: DeployerDef[];
  providers: ProviderDef[];
}

export interface DeployerDef {
  id: number;
  chain_id: number;
  address: string;
  type: string;
  balance: string;
  balance_threshold: string;
  updated_balance_at: string;
  created_at: string;
  updated_at: string;
  is_enabled: number;
}

export interface ProviderDef {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  public_url: null | string;
  chain_id: number;
  order: number;
  is_private: number;
  is_enabled: number;
  is_default: number;
  last_block: number;
  latency: number;
  status: string;
  last_monitored_at: string;
}

export interface LinkDef {
  url: null | string;
  label: string;
  active: boolean;
}
export interface ChainsApiProps {
  current_page: number;
  data: ChainDef[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: LinkDef[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
}

export const CHAINS_API: ChainsApiProps = {
  current_page: 1,
  data: [
    {
      id: 1,
      created_at: "2024-10-01T00:49:18.000000Z",
      updated_at: "2024-10-01T00:49:18.000000Z",
      chain_id: 11155111,
      name: "Sepolia",
      ticker: "ETHUSDT",
      ticker_src: "binance_us",
      is_testnet: 1,
      is_enabled: 1,
      is_available: false,
      deployers: [
        {
          id: 1,
          chain_id: 11155111,
          address: "0xeAB3b6952F62668108B0F254bbC7400C83A9d62D",
          type: "executor",
          balance: "62605543933232745",
          balance_threshold: "100000000000000000",
          updated_balance_at: "2024-10-18 19:00:12",
          created_at: "2024-10-01T00:49:19.000000Z",
          updated_at: "2024-10-18T19:00:12.000000Z",
          is_enabled: 1,
        },
      ],
      providers: [
        // id correto = 5
        {
          id: 55,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "alchemy",
          public_url: null,
          chain_id: 11155111,
          order: 0,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 6916567,
          latency: 260.68,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
        {
          id: 56,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "alchemy",
          public_url: null,
          chain_id: 11155111,
          order: 0,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 6916567,
          latency: 260.68,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
        {
          id: 57,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "alchemy",
          public_url: null,
          chain_id: 11155111,
          order: 0,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 6916567,
          latency: 260.68,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
        {
          id: 588,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "alchemy",
          public_url: null,
          chain_id: 11155111,
          order: 0,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 6916567,
          latency: 260.68,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
        {
          id: 59,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "alchemy",
          public_url: null,
          chain_id: 11155111,
          order: 0,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 6916567,
          latency: 260.68,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
        {
          id: 511,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "alchemy",
          public_url: null,
          chain_id: 11155111,
          order: 0,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 6916567,
          latency: 260.68,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
        {
          id: 6,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "infura",
          public_url: null,
          chain_id: 11155111,
          order: 1,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 6916567,
          latency: 669.149,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
        {
          id: 7,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "thirdweb",
          public_url: "https://11155111.rpc.thirdweb.com",
          chain_id: 11155111,
          order: 2,
          is_private: 0,
          is_enabled: 1,
          is_default: 0,
          last_block: 6916566,
          latency: 405.54,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
        {
          id: 8,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:16.000000Z",
          name: "lava",
          public_url: null,
          chain_id: 11155111,
          order: 3,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 6916567,
          latency: 869.906,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:16",
        },
        {
          id: 9,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:16.000000Z",
          name: "default",
          public_url: "https://rpc2.sepolia.org",
          chain_id: 11155111,
          order: 4,
          is_private: 0,
          is_enabled: 1,
          is_default: 1,
          last_block: 6916567,
          latency: 673.765,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:16",
        },
      ],
    },
    {
      id: 2,
      created_at: "2024-10-01T00:49:18.000000Z",
      updated_at: "2024-10-01T00:49:18.000000Z",
      chain_id: 80002,
      name: "Polygon Amoy",
      ticker: "MATICUSDT",
      ticker_src: "binance_us",
      is_testnet: 1,
      is_enabled: 1,
      is_available: true,
      deployers: [
        {
          id: 2,
          chain_id: 80002,
          address: "0xeAB3b6952F62668108B0F254bbC7400C83A9d62D",
          type: "executor",
          balance: "26902775228099000000",
          balance_threshold: "100000000000000000",
          updated_balance_at: "2024-10-18 19:00:12",
          created_at: "2024-10-01T00:49:19.000000Z",
          updated_at: "2024-10-18T19:00:12.000000Z",
          is_enabled: 1,
        },
      ],
      providers: [
        {
          id: 1,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:14.000000Z",
          name: "alchemy",
          public_url: null,
          chain_id: 80002,
          order: 0,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 13445562,
          latency: 290.261,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:14",
        },
        {
          id: 2,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "infura",
          public_url: null,
          chain_id: 80002,
          order: 1,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 13445563,
          latency: 816.246,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
        {
          id: 3,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:14.000000Z",
          name: "thirdweb",
          public_url: "https://80002.rpc.thirdweb.com",
          chain_id: 80002,
          order: 2,
          is_private: 0,
          is_enabled: 1,
          is_default: 0,
          last_block: 13445563,
          latency: 381.768,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:14",
        },
        {
          id: 4,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:15.000000Z",
          name: "default",
          public_url: "https://rpc-amoy.polygon.technology",
          chain_id: 80002,
          order: 3,
          is_private: 0,
          is_enabled: 1,
          is_default: 1,
          last_block: 13445563,
          latency: 293.441,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:15",
        },
      ],
    },
    {
      id: 3,
      created_at: "2024-10-01T00:49:18.000000Z",
      updated_at: "2024-10-01T00:49:18.000000Z",
      chain_id: 43113,
      name: "Avalanche Fuji",
      ticker: "AVAXUSDT",
      ticker_src: "binance_us",
      is_testnet: 1,
      is_enabled: 1,
      is_available: true,
      deployers: [
        {
          id: 3,
          chain_id: 43113,
          address: "0xeAB3b6952F62668108B0F254bbC7400C83A9d62D",
          type: "executor",
          balance: "361847741112149550",
          balance_threshold: "100000000000000000",
          updated_balance_at: "2024-10-18 19:00:12",
          created_at: "2024-10-01T00:49:19.000000Z",
          updated_at: "2024-10-18T19:00:12.000000Z",
          is_enabled: 1,
        },
      ],
      providers: [
        {
          id: 12,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:17.000000Z",
          name: "infura",
          public_url: null,
          chain_id: 43113,
          order: 0,
          is_private: 1,
          is_enabled: 1,
          is_default: 0,
          last_block: 36359701,
          latency: 953.439,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:17",
        },
        {
          id: 13,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:17.000000Z",
          name: "thirdweb",
          public_url: "https://43113.rpc.thirdweb.com",
          chain_id: 43113,
          order: 1,
          is_private: 0,
          is_enabled: 1,
          is_default: 0,
          last_block: 36359701,
          latency: 339.252,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:17",
        },
        {
          id: 14,
          created_at: "2024-10-15T23:09:17.000000Z",
          updated_at: "2024-10-21T13:35:18.000000Z",
          name: "default",
          public_url: "https://api.avax-test.network/ext/bc/C/rpc",
          chain_id: 43113,
          order: 2,
          is_private: 0,
          is_enabled: 1,
          is_default: 1,
          last_block: 36359701,
          latency: 641.675,
          status: "online",
          last_monitored_at: "2024-10-21 13:35:18",
        },
      ],
    },
  ],
  first_page_url: "http://localhost/api/chains?page=1",
  from: 1,
  last_page: 4,
  last_page_url: "http://localhost/api/chains?page=4",
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "http://localhost/api/chains?page=1",
      label: "1",
      active: true,
    },
    {
      url: "http://localhost/api/chains?page=2",
      label: "2",
      active: false,
    },
    {
      url: "http://localhost/api/chains?page=3",
      label: "3",
      active: false,
    },
    {
      url: "http://localhost/api/chains?page=4",
      label: "4",
      active: false,
    },
    {
      url: "http://localhost/api/chains?page=2",
      label: "Next &raquo;",
      active: false,
    },
  ],
  next_page_url: "http://localhost/api/chains?page=2",
  path: "http://localhost/api/chains",
  per_page: 3,
  prev_page_url: null,
  to: 3,
  total: 12,
};
