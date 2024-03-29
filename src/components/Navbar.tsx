import { Menu, MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "../store/Store.ts";
import { navSlice } from "../store/NavSlice.ts";
const { navTo } = navSlice.actions;

export function Navbar() {
  const dispatch = useAppDispatch();
  const { current } = useAppSelector((state) => state.nav);

  const onClick: MenuProps["onClick"] = (e) => {
    dispatch(navTo(e.key));
  };
  console.log(current);

  const items: MenuProps["items"] = [
    {
      label: "Dog",
      key: "dog",
    },
    {
      label: "Dog2",
      key: "dog2",
    },
  ];

  return (
    <>
      <Menu className={""} items={items} mode="horizontal" onClick={onClick} />
    </>
  );
}
