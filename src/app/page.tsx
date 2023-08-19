import { redirect } from "next/navigation";
import { getSession } from "./(queries)";
import { Hero, About, Events } from "./components";

const Home = async () => {
  const session = await getSession();

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
