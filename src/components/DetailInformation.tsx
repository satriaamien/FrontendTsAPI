import ResponseFormat from "./models"

const DetailInformation:React.FC <{showMeData:ResponseFormat[]}>=(props)=> {
    return<>
    <p>Detail Info</p>
    {console.log(props.showMeData)}
        {props.showMeData.map(item=>{
            return(
                <ul>
                <li> {item.author} </li>
                <li> {item.content} </li>
                <li> {item.description} </li>
                <li> {item.title} </li>
                <li> <img src={`${item.urlToImage}`} alt="Logo" /> </li>
                </ul>
            )
        })}
    </>
    
}

export default DetailInformation