import { Link } from "react-router-dom";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useAppDispatch, useAppSelector } from "../store/Store.ts";
import { useEffect } from "react";
import { getProducts } from "../http/product/httpProducts.ts";

export function Products() {
  const { data, loading } = useAppSelector((state) => state.products);
  const productDispatch = useAppDispatch();

  useEffect(() => {
    productDispatch(getProducts());
  }, [productDispatch]);
  return (
    <>
      <div
        className={"grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "}
      >
        {data.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card
              className={"min-w-60 "}
              hoverable
              loading={loading}
              cover={
                <img src={"https://placehold.co/400x200"} alt={product.name} />
              }
            >
              <Meta title={product.name} description={product.description} />
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
