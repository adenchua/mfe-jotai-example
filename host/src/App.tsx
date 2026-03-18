import { useAtom } from "jotai";
import { lazy, Suspense, useMemo } from "react";
// @ts-expect-error import remote app
import store from "remote/remote-1-store";

const Remote = lazy(
  // @ts-expect-error import remote app
  async () => import("remote/remote-1"),
);

function App() {
  const [count] = useAtom(store.countAtom);

  const memoizedValue = useMemo(() => {
    return count * count;
  }, [count]);

  return (
    <>
      <p>Host</p>
      <p>Count in host: {count}</p>
      <p>Derived Squared Value: {memoizedValue}</p>
      <Suspense fallback="loading...">
        <Remote />
      </Suspense>
    </>
  );
}

export default App;
