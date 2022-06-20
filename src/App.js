import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tour, settour] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const sorttours=(id)=>{
    const newtours= tour.filter((tour)=>tour.id !==id)
    settour(newtours)
  }
  const fetchtours = async () => {
    setloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setloading(false);
      settour(data);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  React.useEffect(() => {
    fetchtours();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if(tour.length === 0){
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchtours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tour={tour} updatetour={sorttours} />
    </main>
  );
}

export default App;
