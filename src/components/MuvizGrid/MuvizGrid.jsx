import React from "react";
import MuviItem from "../MuvizItem/MuviItem";
import "./muvizgrid.css";

function MuvizGrid({ items }) {
  return (
    <div className="muviz-grid">
      <section className="cards">
        {items.map((item) => (
          <MuviItem key={item.id} item={item}></MuviItem>
        ))}
      </section>
    </div>
  );
}

export default MuvizGrid;
