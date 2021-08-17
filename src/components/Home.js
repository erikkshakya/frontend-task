import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../actions/servicesActions";
import Services from "./Services";
import Banner from "./layouts/Banner";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const { loading, services } = useSelector((state) => state.services);
  console.log(services);

  return (
    <Fragment>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Fragment>
          <Banner services={services}/>
          <Services services={services} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
