import { Avatar, Button, Input, Space } from "antd";
import { Notification, SearchNormal1 } from "iconsax-react";
import React from "react";
import { colors } from "../constants/colors";

const HeaderComponent = () => {
  return (
    <div className="p-2 row bg-white">
      <div className="col">
        <Input
          placeholder="Search product, supplier, order"
          style={{ borderRadius: 100, width: "50%" }}
          size="large"
          prefix={
            <SearchNormal1 className="text-muted" size={20} color="gray" />
          }
        />
      </div>
      <div className="col text-end">
        <Space>
          <Button
            type="text"
            icon={<Notification size={25} color={colors.gray600} />}
          />
          <Avatar
            size={40}
            src="https://firebasestorage.googleapis.com/v0/b/kanban-37550.appspot.com/o/anh.png?alt=media&token=18ca68e6-0a4f-4ff3-a16c-660471ce8355"
          />
        </Space>
      </div>
    </div>
  );
};

export default HeaderComponent;
