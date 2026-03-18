import { useAtom } from "jotai";

import countAtom from "./store/countAtom";

export default function Button() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <button
      style={{ height: "40px", width: "60px" }}
      onClick={() => setCount((prev) => prev + 1)}
    >
      {count}
    </button>
  );
}
