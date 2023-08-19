import { redirect } from "next/navigation";
import { getSession } from "../(queries)";
import Form from "./components/Form";

const SignOut = async () => {
  // Retrieve session data
  const session = await getSession();

  // If not currently logged in
  if (!session) {
    redirect("/");
  }

  return (
    <>
      <Form />
    </>
  );
};

export default SignOut;
