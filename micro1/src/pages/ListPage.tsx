import { Link } from "react-router";

export default function ListPage() {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Link to="../detail">Detail</Link>
      <Link to="../detail/1">Detail 1</Link>
      <Link to="../detail/2">Detail 2</Link>
      <Link to="../detail/3">Detail 3</Link>
    </div>
  );
}
