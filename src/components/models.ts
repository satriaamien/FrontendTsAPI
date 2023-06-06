interface ResponseFormat{
    source:{
      id: string
      name :string 
      title?:string 
    }
  }
interface ResponseFormat {
    author:string,title:string,description:string,url:string,urlToImage:string,publishedAt:string,content:string
}

export default ResponseFormat