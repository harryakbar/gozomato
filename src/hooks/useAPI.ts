import { useCallback, useState } from "react";
import { AxiosError } from "axios";

export type UseAPIOptions = {
  shouldResetBeforeFetch?: boolean;
  shouldResetOnError?: boolean;
  shouldThrowError?: boolean;
};

export function useAPI(
  fetchPromise: (...args: any) => Promise<{ data: any }>,
  {
    shouldResetBeforeFetch = false,
    shouldResetOnError = false,
    shouldThrowError = false,
  }: UseAPIOptions = {}
) {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const reset = () => setData(null);

  const fetch = useCallback(
    async (...args) => {
      setIsLoading(true);
      setError(null);
      if (shouldResetBeforeFetch) setData(null);
      try {
        const result = await fetchPromise(...args);
        setData(result.data);
      } catch (e) {
        setError(e);
        if (shouldResetOnError) reset();

        if (shouldThrowError) {
          throw e;
        }
      } finally {
        setIsLoading(false);
      }
    },
    [fetchPromise, shouldResetBeforeFetch, shouldResetOnError, shouldThrowError]
  );

  return [data, fetch, isLoading, error, reset];
}
