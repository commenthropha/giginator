import { redirect } from "next/navigation";
import { getSession, Header } from "../[global]"

const Dashboard = async () => {

  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <Header title="Dashboard"/>
  )
}

export default Dashboard