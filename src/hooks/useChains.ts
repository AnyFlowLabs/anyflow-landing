import { ChainDef } from "@/const/chainsApi";
import { useEffect, useState } from "react";

const useChains = (page: number) => {
  const [chains, setChains] = useState<ChainDef[]>([]);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChains = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api-staging.anyflow.pro/api/chains?page=${page}`,
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
  }, [page]);

  return { chains, lastPage, isLoading };
};

export default useChains;
