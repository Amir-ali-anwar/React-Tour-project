import React from "react";
import Tour from "./Tour";
const Tours = ({tour}) => {
 console.log(tour);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline" />
      </div>
      <div>
        {
          tour?.map((item,index)=>(
            <article className="single-tour" key={index}>
              <img src={item.image} alt={item.name} />
              <footer>
                <div className="tour-info">
                <h4>{item.name}</h4>
                <h4>{item.price}</h4>
                </div>
                <p>{item.info}</p>
                <button className="delete-btn">not interested</button>
              </footer>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default Tours;
