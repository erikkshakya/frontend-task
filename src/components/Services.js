import React, { Fragment } from "react";

const Services = ({ service }) => {
  return (
    <Fragment>
      <h2>{service.title}</h2>
      <p>{service.description1}</p>
      <p>{service.description2}</p>
    </Fragment>
  );
};

export default Services;
