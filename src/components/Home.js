import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../actions/servicesActions";
import Services from "./Services";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const { loading, services, error } = useSelector((state) => state.services);
  console.log(services);

  return (
    <Fragment>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Fragment>
          {services &&
            services.map((service) => (
              <Services key={service.id} service={service} />
            ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
