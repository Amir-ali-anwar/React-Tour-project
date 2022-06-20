import React from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tour, settour] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const fetchtours=async ()=>{
    setloading(true)
    try {
      const response= await fetch(url);
      const data=await response.json()
      setloading(false)
      settour(data)
    } catch (error) { 
      setloading(false)
      console.log(error)
    }
  }
  React.useEffect(()=>{
    fetchtours()
  },[])
  if(loading){
    return  <Loading /> 
  }
  return (
    <main>
      <Tours tour={tour} />
    </main>
  )
}

export default App
