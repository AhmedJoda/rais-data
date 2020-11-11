import React, { Fragment, useState } from "react";
import Child from "./child";

export default function Parent() {
  const [name, setName] = useState("");

  return (
    <Fragment>
      <h1>welcome {name}</h1>
      <Child setName={(value) => setName(value)} />
    </Fragment>
  );
}
