import { Button, Space, Table, Typography } from "antd";
import { ColumnProps } from "antd/es/table";
import { Filter, FilterSearch, Sort } from "iconsax-react";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import { ToogleSupplier } from "../modals";
import { SupplierModel } from "../models/SupplierModel";
const { Title } = Typography;
const Suppliers = () => {
  const [isVisibleModalAddNew, setIsVisibleModalAddNew] = useState(false);

  const columns: ColumnProps<SupplierModel>[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];
  return (
    <div>
      <Table
        dataSource={[]}
        columns={columns}
        title={() => (
          <div>
            <div className="row">
              <div className="col">
                <Title>Suppliers</Title>
              </div>
              <div className="col text-end">
                <Space>
                  <Button
                    type="primary"
                    onClick={() => setIsVisibleModalAddNew(true)}
                  >
                    Add Supplier
                  </Button>
                  <Button icon={<Sort size={20} color={colors.gray600} />}>
                    Filters
                  </Button>
                  <Button>Download All</Button>
                </Space>
              </div>
            </div>
          </div>
        )}
      />
      <ToogleSupplier
        visible={isVisibleModalAddNew}
        onAddNew={(val) => console.log(val)}
        onClose={() => setIsVisibleModalAddNew(false)}
      />
    </div>
  );
};

export default Suppliers;
