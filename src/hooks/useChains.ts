import { ChainDef } from "@/const/chainsApi";
import { useEffect, useState } from "react";

const useChains = (filter: string) => {
  const [chain, setChains] = useState<ChainDef[]>([]);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChains = async () => {
      setIsLoading(true);
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
        setChains(data.data);
        setLastPage(data.last_page);
      } catch (error) {
        console.error("Failed to fetch chains:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChains();
  }, [filter]);

  return { chain, lastPage, isLoading };
};

export default useChains;
