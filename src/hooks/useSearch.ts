import { ChainDef } from "@/const/chainsApi";
import { useEffect, useState } from "react";

const useSearch = (filter: string) => {
  const [chain, setChain] = useState<ChainDef>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchChain = async () => {
      const isNumeric = (value: string) =>
        !isNaN(parseFloat(value)) && isFinite(+value);
      setIsLoading(true);
      try {
        const queryParam = isNumeric(filter as string)
          ? `filter[chain_id]=${Number(filter)}`
          : `filter[name]=${filter}`;

        const response = await fetch(
          `https://api-staging.anyflow.pro/api/chains?${queryParam}`,
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
  }, [filter]);

  return { chain, isLoading };
};

export default useSearch;
