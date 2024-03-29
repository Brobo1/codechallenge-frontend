import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/Store.ts";
import { useEffect } from "react";
import { getProduct } from "../http/product/httpProduct.ts";

export function Product() {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { data: product, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(parseInt(productId)));
    }
  }, [dispatch, productId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          className={"grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "}
        >
          <p>{product.name}</p>
        </div>
      )}
    </>
  );
}
