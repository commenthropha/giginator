import Image from "next/image";
import HeroImage from "../hero.png";
import styles from "./styles/Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={`${styles.hero} gradient`}>
        <h1
          className={`${styles.title} has-text-white has-text-weight-semibold has-text-white mt-6 p-6`}
        >
          Eventful Evenings <br></br>
          Made Easy
        </h1>
        <Image src={HeroImage} alt="Hero" width={1000} height={1} />
      </div>
    </>
  );
};

export default Hero;
