import { redirect } from "next/navigation";
import { getSession } from "../[global]"
import Form from "./components/Form"

const SignOut = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
        <Form />
    </>
  )
}

export default SignOut