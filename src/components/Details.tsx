import { Avatar, List } from 'antd';
import { useEffect} from 'react';
import BtnAcc from './BtnAcc';
import ResponseFormat from './models';
import React from 'react';

const  Details:React.FC <{btnHandlers:(item:ResponseFormat)=>void}>=({btnHandlers})=> {
  const [myData, setMyData] =React.useState<ResponseFormat[]>([],)

  

    // const data:{id:string, title:string}[] = [
    //     {
    //       "id":"p1",
    //       "title": 'Ant Design Title 1',
    //     },
    //     {
    //     "id":"p2",
    //       "title": 'Ant Design Title 2',
    //     },
    //     {
    //     "id":'p3',
    //       "title": 'Ant Design Title 3',
    //     },
    //     {
    //     "id":'p4',
    //       "title": 'Ant Design Title 4',
    //     },
    //   ];
    
    // const conditions=(cond:boolean)=>{
    //   props.getCondition(cond)
    // }
    // let getdatas=props.datas
    useEffect(()=>{
        const getData = async () => {
            let response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=48e8c9a10ecc4fcba98c6a72975f9938")
            let responses = await response.json()
            let resp:ResponseFormat[]= responses.articles
            resp = resp.slice(0,20)
            let getresp = resp.map(item=>{
              return{...item,
                id:item.source.id,
                title: item.source.name
              }
            })

            // setPerson({
            //   ...person, // Copy the old fields
            //   firstName: e.target.value // But override this one
            // });

            // console.log("resp",getresp)
            // // console.log(responses.author)
            // console.log(resp)
            
            setMyData(getresp)
        }
        getData()
    },[])
  
    console.log("1")          
    
    return<>
    <List
       itemLayout="horizontal"
       dataSource={myData}
       renderItem={(item, index) => (
         <List.Item>
           <List.Item.Meta
             avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
             title={item.title}
             description={item.description}
             />
             <BtnAcc btnHandler={btnHandlers.bind(null,item)} />
         </List.Item>
       )}
       />
    </> 
}
export default Details





