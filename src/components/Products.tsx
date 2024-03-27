import { useAppDispatch, useAppSelector } from "../store/Store.ts";
import { useEffect } from "react";
import { fetchProducts } from "../http/fetchProducts.ts";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

export function Products() {
  const { data, loading } = useAppSelector((state) => state.products);
  const productDispatch = useAppDispatch();

  useEffect(() => {
    productDispatch(fetchProducts());
  }, [productDispatch]);
  //
  return (
    <div className={"grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "}>
      {data.map((product) => (
        <Card
          className={"min-w-60 "}
          hoverable
          cover={
            <img src={"https://placehold.co/400x200"} alt={product.name} />
          }
        >
          <Meta title={product.name} description={product.description} />
        </Card>
      ))}
    </div>
  );
}
