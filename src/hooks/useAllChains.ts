import { useEffect, useState } from "react";

import { ChainDef } from "@/const/chainsApi";

const isNumeric = (value: string) =>
  !isNaN(parseFloat(value)) && isFinite(+value);

const baseUrl = "https://api-staging.anyflow.pro/api/chains";

function useAllChains(page: number, filter: string | null = null) {
  const [chains, setChains] = useState<ChainDef[]>([]);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChains = async () => {
      setIsLoading(true);
      try {
        const queryParam =
          filter !== null
            ? isNumeric(filter as string)
              ? `filter[chain_id]=${Number(filter)}`
              : `filter[name]=${filter}`
            : null;

        const response = await fetch(
          `${baseUrl}${queryParam ? `?${queryParam}` : `?page=${page}`}`,
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
  }, [page, filter]);

  return { chains, lastPage, isLoading };
}

export default useAllChains;
