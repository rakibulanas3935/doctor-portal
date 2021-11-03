import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import AppoinmentHeader from "./AppoinmentHeader";
import Available from "./Available";

const Appoinment2 = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
      <Available date={date}></Available>
    </div>
  );
};

export default Appoinment2;
