import { Button } from "antd";
import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <Button
        type="default"
        style={{ width: "100%" }}
        size="large"
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
