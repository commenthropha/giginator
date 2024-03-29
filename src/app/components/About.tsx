import Link from "next/link";

/*
 * Section to display information about the website
 */
const About = () => {
  return (
    <div id="about">
      <div className="container is-fullhd my-6">
        <h2 className="purple title is-3 is-size-4-mobile has-text-centered has-text-weight-semibold pt-6">
          What is the Giginator?
        </h2>
        <p className="is-size-5 is-size-6-mobile has-text-centered purple p-5 mx-6">
          The Giginator is an event management system, offering you access to
          all exclusive events.
        </p>
      </div>
      <div className="has-text-centered is-flex-desktop is-flex-direction-row is-justify-content-space-between gradient-box p-6 m-6">
        <p className="is-size-4 is-size-5-mobile has-text-white has-text-weight-semibold m-3">
          Register today and start exploring a world teeming with new
          opportunities.
        </p>
        <Link
          href="/sign-in"
          className="button has-text-weight-semibold is-warning is-medium m-3"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default About;
