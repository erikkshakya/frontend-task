import React from "react";
import { Link } from "react-scroll";

const Banner = ({ services }) => {
  return (
    <div className="banner container">
      <div className="banner__content">
        <h3 className="banner__title">SERVICES</h3>
        <h5>
          At <span style={{ color: "#124af4" }}>NAXA</span>, we work on{" "}
          <span style={{ color: "#124af4" }}>ideas</span>; ideas that can
          provide <span style={{ color: "#124af4" }}>simple solutions</span> to{" "}
          <span style={{ color: "#124af4" }}>complex problems</span>.
        </h5>
        <p className="banner__para">
          We work as a team to generate, explore, build and validate ideas. We
          also contextualize innovations around the world to find the best
          fitting solutions to local problems.
        </p>
      </div>
      <div className="banner__service">
        {services &&
          services.map((service) => (
            <Link
              to={service.id}
              spy={true}
              smooth={true}
              duration={500}
              className="banner__scroll"
            >
              <h3>{service.title}</h3>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Banner;
