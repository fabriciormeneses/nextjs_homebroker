export type Asset = {
  id: number;
  symbol: string;
  price: number;
};

export type WalletAsset = {
  id: string;
  wallet_id: string;
  asset_id: string;
  shares: number;
  Asset: Asset;
};

export type Order = {
  id: string;
  wallet_id: string;
  asset_id: string;
  shares: number;
  price: number;
  type: 'BUY' | 'SELL';
  status: 'PENDING' | 'OPEN' | 'CLOSED' | 'FAILED';
  created_at: string;
  updated_at: string;
  Asset: Pick<Asset, 'id' | 'symbol' | 'price'>;
};
