import { useAtom } from "jotai";

import store from "./store";
import Button from "./Button";

function App() {
  const [count] = useAtom(store.countAtom);

  return (
    <div style={{ padding: "24px", border: "1px dotted red" }}>
      <p>Remote 1</p>
      <p>Count in remote: {count}</p>
      <Button />
    </div>
  );
}

export default App;
