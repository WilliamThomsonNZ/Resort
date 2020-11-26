import React, { useState } from "react";
import { ReactComponent as PalmIcon } from "../imgs/palm-tree.svg";
import Accordion from "./microComponents/Accordion";
import { accordionIds } from "./microComponents/AccordionData";
import relaxImg from "../imgs/relax.jpg";

const Relax = () => {
  const [expanded, setExpanded] = useState(0);
  return (
    <section className="relax">
      <div className="container">
        <PalmIcon />
        <p>
          Located in the very heart of Sanur you will find our Spa and Yoga
          Shala nestled down a banana palm-lined avenue. Once you enter the gate
          you will feel the peaceful vibration of our garden sanctuary away from
          the hustle and bustle of life on the street.
        </p>
        <p>
          Be kind to yourself, enjoy one of our treatments and experience what
          our guests call ‘Koa Bliss’
        </p>
        <div className="relax-grid">
          <div className="relax-img">
            <span>Yoga Shala</span>
            <img src={relaxImg} alt="Yoga shala at Koa Shala" />
          </div>
          <div className="relax-info">
            <h2>Relax with us</h2>
            <p>A sanctuary in a beautiful tropical setting</p>
            {accordionIds.map((details, index) => (
              <Accordion
                details={details}
                key={index}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relax;
