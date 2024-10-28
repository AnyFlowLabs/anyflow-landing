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
export interface ChainsApiResponse {
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
