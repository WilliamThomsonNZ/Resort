import React from "react";

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;

  return (
    <>
      <div
        className="accordion-header"
        onClick={() => setExpanded(isOpen ? false : details.id)}
      >
        <div className="accordion-icon">
          <span
            style={{
              transform: `rotate(${isOpen ? "0" : "45"}deg) translateX(${
                isOpen ? "0" : "3px"
              })`,
            }}
          ></span>
          <span
            style={{
              transform: `rotate(${isOpen ? "0" : "-45"}deg) translateX(${
                isOpen ? "0" : "-3px"
              })`,
            }}
          ></span>
        </div>
        {details.title}
      </div>
      <div
        className="accordion-content"
        style={{ height: isOpen ? "115px" : "0" }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </div>
    </>
  );
};

export default Accordion;
