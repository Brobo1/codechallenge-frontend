import { Menu, MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "../store/Store.ts";
import { getCategories } from "../http/category/httpCategories.ts";
import { useEffect } from "react";
import { setCurrentCategory } from "../store/NavSlice";
import { CategoryType } from "../types/Types.ts";

export function Navbar() {
  const dispatch = useAppDispatch();
  const {
    category: categoryData,
    currentCategory,
    loading,
  } = useAppSelector((state) => state.nav);

  const onClick: MenuProps["onClick"] = (e) => {
    dispatch(setCurrentCategory(e.key.toString()));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const generateMenuItems = (
    categories: CategoryType[],
  ): MenuProps["items"] => {
    return categories.map((category) => {
      let children;
      if (category.subCategories && Array.isArray(category.subCategories)) {
        children = generateMenuItems(category.subCategories);
      }
      return {
        label: category.name,
        key: category.id.toString(),
        children: children,
      };
    });
  };

  let items: MenuProps["items"] | undefined;
  if (categoryData && Array.isArray(categoryData.subCategories)) {
    items = generateMenuItems(categoryData.subCategories);
  }

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
