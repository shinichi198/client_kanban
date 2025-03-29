import { Button, message } from "antd";
import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebaseConfig";
import handleAPI from "../../../apis/handleAPI";
import { addAuth } from "../../../redux/reducers/authReducer";
import { localDataNames } from "../../../constants/appInfo";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

provider.setCustomParameters({
  login_hint: "shinichi198@gmail.com",
});
interface Props {
  isRemember?: boolean;
}
const SocialLogin = (props: Props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { isRemember } = props;
  provider.setCustomParameters({
    prompt: "select_account",
  });
  const hangleLoginWithGoogle = async () => {
    setIsLoading(true);
    const api = `/auth/google-login`;
    messageApi.success(`DDsndlfsdklfs`);
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        const user = result.user;
        if (user) {
          const data = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          };
          const res: any = await handleAPI(api, data, "post");
          res.data && dispatch(addAuth(res.data));
          if (isRemember) {
            localStorage.setItem(
              localDataNames.authData,
              JSON.stringify(res.data)
            );
          }
          messageApi.success(res.message);
        }
      } else {
        console.log(`Can not login with google`);
      }
    } catch (error: any) {
      console.log(error.message);
      messageApi.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {contextHolder}
      <Button
        type="default"
        style={{ width: "100%" }}
        size="large"
        onClick={hangleLoginWithGoogle}
        icon={
          <img
            width="42"
            height="42"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
          />
        }
      >
        Sign up with Google
      </Button>
    </div>
  );
};

export default SocialLogin;
