import { Button} from 'antd';
import React from 'react';
// import ResponseFormat from './models';


const BtnAcc:React.FC <{btnHandler:()=>void}> =(props)=>{
//   const [cond, setCond] = React.useState<boolean>(false)

    // const btnClick=(event: React.MouseEvent<HTMLElement>,item:any)=>{
    //     event.preventDefault()
    //     setCond(prevState=>!prevState)
    //     props.onAddItem(item)
    //     props.condition(cond)
    //     console.log(item)
    // }
    return<>
        <Button onClick={props.btnHandler}  type="primary">click</Button>
    </>
}

export default BtnAcc