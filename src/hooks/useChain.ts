import { ChainDef } from "@/const/chainsApi";
import { useEffect, useState } from "react";

const useChain = (chainId: number) => {
  const [chain, setChain] = useState<ChainDef>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchChain = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api-staging.anyflow.pro/api/chains/${chainId}`,
        );
        const data = await response.json();
        setChain(data);
      } catch (error) {
        console.error("Failed to fetch chains:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChain();
  }, [chainId]);

  return { chain, isLoading };
};

export default useChain;
