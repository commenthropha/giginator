import { redirect } from "next/navigation";
import { getSession } from "./(queries)";
import { Hero, About, Events } from "./components";

const Home = async () => {
  // Retrieve session data
  const session = await getSession();

  // If currently logged in
  if (session) {
    redirect("/dashboard");
  }

  return (
    <main>
      <Hero />
      <About />
      <Events />
    </main>
  );
};

export default Home;
