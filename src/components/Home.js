import React from "react";
import { Link } from "react-router-dom";

import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack! Eyy Bby You Wnt Sum Fuc</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;
