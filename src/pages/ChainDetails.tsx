import { useParams } from "react-router-dom";
export default function ChainDetails() {
  const { chainName } = useParams();

  return <div>{chainName}</div>;
}
