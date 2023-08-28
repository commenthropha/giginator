import styles from "./styles/Hero.module.css";
import Image from "next/image";
import abstract from "../abstract.png"

/*
 * Hero to be displayed on the index page
 */
const Hero = () => {
  return (
    <>
      <div className={`${styles.hero} gradient`}>
        <h1
          className={`${styles.title} has-text-weight-semibold has-text-white mt-6 p-6`}
        >
          Eventful Evenings <br></br>
          Made Easy
        </h1>
        <Image src = {abstract} height={500} alt = "abstract" />
      </div>
    </>
  );
};

export default Hero;
