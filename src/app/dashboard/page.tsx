import { redirect } from "next/navigation";
import { getSession } from "../[global]"

const Dashboard = async () => {

  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard