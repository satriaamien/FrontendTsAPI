
import DetailInformation from "./components/DetailInformation";
import Details from "./components/Details";
import ResponseFormat from "./components/models";
import React, { useState } from "react";
import Nav from './components/Nav'

type List = { nama:string,
  kelas:string}

function App() {  
  const [cond, setCond] = React.useState<boolean>(false)
  const [nav, setNav] = useState<List>({nama:"satria amien",kelas:"satu"})
  const [detailsData,setDetailsData]= React.useState<ResponseFormat[]>([])
  
 

  const getAddItem=(item:ResponseFormat)=>{
    setCond(true)
    console.log(item)
    setDetailsData([item])
  }
  // const getCondition=(item:boolean)=>{
  //   return({item})
  // }
  return (
    <>
      <Nav/>
      <div>
        {nav.nama}
        {/* <button onClick={btnAdd}>+</button> */}
      </div>
      {!cond&&<Details btnHandlers={getAddItem}/>}
      {cond && <DetailInformation showMeData={detailsData} /> }
      {/* {!getCondition&&<DetailInformation/>} */}
    </>
  );
}

export default App;
