import React, { Fragment } from "react";
import { Element } from "react-scroll";

const Services = ({ services }) => {
  return (
    <Fragment>
      {services &&
        services.map((service) => (
          <Element id={service.id} name={service.id}>
            <div className="services container container-pall" key={service.id}>
              <div className="services__grid">
                <div className="services__image">
                  <img
                    className="services__photo"
                    src={service.photo}
                    alt={service.title}
                  />
                </div>
                <div className="services__details">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="services__icon"
                  />
                  <h3 className="services__title">{service.title}</h3>
                  <p className="services__description1">
                    {service.description1}
                  </p>
                  <div className="services__highlight">
                    <p className="services__description2">
                      {service.description2}
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </Element>
        ))}
    </Fragment>
  );
};

export default Services;
