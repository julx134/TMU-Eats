import "../App.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Popover } from "antd";

const Profile = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <Avatar size={50} icon={<UserOutlined />} />
    </div>
  );
};

export default Profile;
