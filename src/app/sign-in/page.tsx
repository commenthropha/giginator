import { redirect } from "next/navigation";
import { getSession } from "../(queries)"
import Form from "./components/Form"

const SignIn = async () => {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }
  
  return (
    <>
        <Form />
    </>
  )
}

export default SignIn