import { Menu, MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "../store/Store.ts";
import { getCategories } from "../http/category/httpCategories.ts";
import { useEffect } from "react";
import { setCurrentCategory } from "../store/NavSlice";

export function Navbar() {
  const dispatch = useAppDispatch();
  const { category, currentCategory, loading } = useAppSelector(
    (state) => state.nav,
  );

  const onClick: MenuProps["onClick"] = (e) => {
    dispatch(setCurrentCategory(e.key.toString()));
  };

  console.log(currentCategory);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const items: MenuProps["items"] = category.map((cat) => ({
    label: cat.name,
    key: cat.id,
  }));

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={""}>
          <Menu
            className={""}
            items={items}
            mode="horizontal"
            onClick={onClick}
          />
        </div>
      )}
    </>
  );
}
