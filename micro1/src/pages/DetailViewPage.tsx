import { useAtom } from "jotai";
import { useParams } from "react-router";
import productsAtom from "../store/productsAtom";
import { useEffect } from "react";

export default function DetailViewPage() {
  const { id } = useParams();
  const [, setSelectedId] = useAtom(productsAtom);

  useEffect(() => {
    setSelectedId(Number(id));
  }, [id, setSelectedId]);

  return <div>Product ID: {id}</div>;
}
