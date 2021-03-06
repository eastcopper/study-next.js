import GoogleLogin from "react-google-login";
import { CLIENT_ID } from "../../src/lib/export/data";

export default function Login() {
  const onSuccess = async (res: any) => {
    const {
      googleId,
      profileObj: { email, name, imageUrl },
    } = res;

    console.log(res);
  };

  const onFailure = (err: any) => {
    console.log(err);
  };

  return (
    <>
      <GoogleLogin
        clientId={CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        render={(_renderProps) => <div></div>}
        autoLoad={true}
        // redirectUri="http://localhost:3000/view/login"
      ></GoogleLogin>
    </>
  );
}
