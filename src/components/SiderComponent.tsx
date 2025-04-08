import { Layout, Menu, MenuProps, Typography } from "antd";
import { Box, Chart, DocumentCloud, Home2, ProfileCircle } from "iconsax-react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { appInfo, localDataNames } from "../constants/appInfo";
import { colors } from "../constants/colors";
const { Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];
const { Text } = Typography;
const items: MenuItem[] = [
  {
    label: <Link to={"/"}>Dashboard</Link>,
    key: "dashboard",
    icon: <Home2 size={20} color="green" />,
  },
  {
    label: <Link to={"/inventory"}>Inventory</Link>,
    key: "inventory",
    icon: <Home2 size={20} color="green" />,
  },
  {
    label: <Link to={"/report"}>Reports</Link>,
    key: "report",
    icon: <Chart size={20} color="black" />,
  },
  {
    label: <Link to={"/supplier"}>Suppliers</Link>,
    key: "supplier",
    icon: <ProfileCircle size={20} color="black" />,
  },
  {
    label: <Link to={"/order"}>Orders</Link>,
    key: "order",
    icon: <Box size={20} color="black" />,
  },
  {
    label: <Link to={"/manage-store"}>Manage Store</Link>,
    key: "store",
    icon: <DocumentCloud size={20} color="black" />,
  },
];
const SiderComponent = () => {
  return (
    <Sider width={280} theme="light" style={{ height: "100vh" }}>
      <div className="p-2 d-flex">
        <img src={appInfo.logo} style={{ width: 48, height: 48 }} />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: colors.primary500,
            margin: 0,
            alignItems: "center",
            display: "flex",
          }}
        >
          {appInfo.title}
        </Text>
      </div>
      <Menu items={items} />
    </Sider>
  );
};

export default SiderComponent;
