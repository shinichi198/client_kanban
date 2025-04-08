import "./App.css";
import Routers from "./routers/Routers";
import { ConfigProvider, message } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store";
message.config({
  top: 200,
  duration: 10,
  maxCount: 3,
  rtl: true,
  prefixCls: "my-message",
});
function App() {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorTextHeading: "#1570EF",
        },
        components: {},
      }}
    >
      <Provider store={store}>
        {contextHolder}
        <Routers />;
      </Provider>
    </ConfigProvider>
  );
}

export default App;
