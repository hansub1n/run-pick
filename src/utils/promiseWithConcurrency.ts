/**
 * 동시 실행 개수를 제한하며 Promise 배열을 실행합니다.
 * 각 작업은 순서대로 실행되지만, 최대 concurrency 개수만큼 병렬로 처리됩니다.
 */
export async function promiseWithConcurrency<T>(
  promiseFns: (() => Promise<T>)[],
  concurrency: number = 3,
): Promise<T[]> {
  const results: T[] = [];
  let index = 0;

  const worker = async () => {
    while (index < promiseFns.length) {
      const currentIndex = index++;
      try {
        const result = await promiseFns[currentIndex]();
        results[currentIndex] = result;
      } catch (error) {
        console.warn(`[promiseWithConcurrency] Request #${currentIndex} failed:`, error);
        results[currentIndex] = undefined as unknown as T;
      }
    }
  };

  const workers = Array.from({ length: Math.min(concurrency, promiseFns.length) }, () => worker());
  await Promise.all(workers);

  return results;
}

/**
 * 재시도 로직이 포함된 fetch 함수.
 * 일시적인 네트워크 오류 시 최대 maxRetries번까지 재시도합니다.
 * 지수 백오프(1s → 2s → 4s)로 대기합니다.
 */
export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries: number = 2,
): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(`[fetchWithRetry] Attempt ${attempt + 1}/${maxRetries + 1} failed:`, lastError.message);

      if (attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt), 5000);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}
