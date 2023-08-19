import Logo from "./logo-white.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="has-background-purple primary-dark p-5">
      <div className=" has-text-white content has-text-centered">
        <p style={{ fontSize: ".75rem" }}>
          <strong className="has-text-white">The Giginator</strong> by Anees
          Haroon. The source code is licensed. The website content is licensed{" "}
          <a
            className="has-text-white"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            CC BY NC SA 4.0
          </a>
          .
        </p>
        <Image src={Logo} width="100" height="40" alt="Giginator Logo" />
      </div>
    </footer>
  );
};

export default Footer;
