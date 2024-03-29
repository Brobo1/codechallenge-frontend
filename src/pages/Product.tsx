import { useParams } from "react-router-dom";

export function Product() {
  const params = useParams();
  console.log(params);
  return (
    <div className={"grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "}>
      <p>Product {params.productId}</p>
    </div>
  );
}
