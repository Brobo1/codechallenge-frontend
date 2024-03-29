import { Menu, MenuProps } from "antd";

export function Navbar() {
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
      <Menu items={items} mode="horizontal" />
    </>
  );
}
