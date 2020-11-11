import React from "react";

export default function Child({ setName }) {
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
