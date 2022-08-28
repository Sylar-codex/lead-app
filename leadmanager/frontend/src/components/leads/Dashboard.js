import React, { Fragment } from "react";
import Form from "./Form";
import Lead from "./Leads";

function Dashboard() {
  return (
    <div>
      <Fragment>
        <Form />
        <Lead />
      </Fragment>
    </div>
  );
}

export default Dashboard;
