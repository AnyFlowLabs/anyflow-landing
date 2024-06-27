import arbitrumIcon from "../assets/chains/arbitrum.svg";
import baseIcon from "../assets/chains/base.svg";
import auroraIcon from "../assets/chains/aurora.svg";
import avalancheIcon from "../assets/chains/avalanche.svg";
import cronosIcon from "../assets/chains/cronos.svg";
import fantomIcon from "../assets/chains/fantom.svg";
import gnosisIcon from "../assets/chains/gnosis.svg";
import optimismIcon from "../assets/chains/optimism.svg";

export type ChainDef = {
  name: string,
  value: string,
  icon: string,
}

export const chains: ChainDef[] = [
  { name: "Base", value: "baseSepolia", icon: baseIcon },
  { name: "Ethereum", value: "sepolia", icon: "" },
  { name: "BSC", value: "bscTestnet", icon: '' },
  { name: "Polygon", value: "polygonAmoy", icon: "" },
  { name: "Avalanche", value: "avalancheFuji", icon: avalancheIcon },
  { name: "Arbitrum", value: "arbitrumSepolia", icon: arbitrumIcon },
  { name: "Fantom", value: "fantomTestnet", icon: fantomIcon },
  { name: "Optimism", value: "optimismSepolia", icon: optimismIcon },
  { name: "Gnosis", value: "gnosisChiado", icon: gnosisIcon },
  { name: "Aurora", value: "auroraTestnet", icon: auroraIcon },
  { name: "ZkSync", value: "zkSyncSepoliaTestnet", icon: "" },
  { name: "Cronos", value: "cronosTestnet", icon: cronosIcon },
];
