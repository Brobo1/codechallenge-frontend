import { useAppDispatch, useAppSelector } from "../store/Store.ts";
import { useEffect } from "react";
import { fetchProducts } from "../http/fetchProducts.ts";

export function Products() {
  const { data, loading } = useAppSelector((state) => state.products);
  const productDispatch = useAppDispatch();

  useEffect(() => {
    productDispatch(fetchProducts());
  }, [productDispatch]);

  return (
    <div className={"flex flex-wrap gap-2 "}>
      {loading ? (
        <p>loading...</p>
      ) : (
        data.map((products) => (
          <div
            className={
              "shadow bg-gray-600  w-96 h-80  flex flex-col justify-between rounded"
            }
            key={products.id}
          >
            <div className={"p-0 m-0 "}>
              <img
                className={"rounded h-48 "}
                src={"https://placehold.co/400x200"}
                alt={products.name}
              />
            </div>
            <div className={"p-2   h-full rounded"}>
              <p className={"text-3xl font-thin"}>{products.name}</p>
              <p className={"text-xl font-light "}>{products.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
