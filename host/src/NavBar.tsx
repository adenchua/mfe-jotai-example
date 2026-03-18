import { useAtom } from "jotai";
// @ts-expect-error import remote app
import store from "remote/remote-1-store";

export default function Navbar() {
  const [selectedId] = useAtom(store.productsAtom);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        height: "56px",
        borderBottom: "1px solid #e5e5e5",
        backgroundColor: "#ffffff",
        marginBottom: "16px",
      }}
    >
      <p>Selected product ID from remote: {selectedId}</p>
    </nav>
  );
}
