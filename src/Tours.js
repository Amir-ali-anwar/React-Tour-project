import React from "react";
const Tours = ({tour,updatetour}) => {
 const [readmore,setreadmore]=React.useState(false)
 console.log(readmore)
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
                <h4 className="tour-price">{item.price}</h4>
                </div>
                <p>{readmore ? item.info : `${item.info.substring(0, 200)}...`}
                
                  <button onClick={()=>setreadmore(!readmore)}>{!readmore?'Read More':'Show Less'}</button>
                </p>
                <button className="delete-btn" onClick={()=>updatetour(item.id)}>not interested</button>
              </footer>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default Tours;
