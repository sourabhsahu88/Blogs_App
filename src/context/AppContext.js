import {createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
import { useNavigate } from "react-router-dom";

//creation
export const AppContext = createContext();

const AppContextProvider = ({children})=>{
   const [loading,setLoading] = useState(true);
   const [posts,setPosts] = useState([]);
   const [page,setPage] = useState(1);
   const [totalPages,setTotalPages] = useState(null);
   const navigate = useNavigate();


   async function fetchBlogPosts(page=1,tag=null,category){
     setLoading(true);
      try{
       let url = `${baseUrl}?page=${page}`

       if(tag){
        url+=`&tag=${tag}`;
       }

       if(category){
        url+=`&category=${category}`
       }
       const response = await fetch(url);
       const output = await response.json();
       console.log(output);
       setPosts(output.posts);
       setPage(output.page);
       setTotalPages(output.totalPages);
      }
      catch(err){
        console.log(err);
        setPage(1);
        setTotalPages(null);
        setPosts([]);
      }
      setLoading(false);
   }



    function handlePageChange(page){
        setPage(page);
        navigate({search:`?page=${page}`})
    }

   const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange
   }

   return <AppContext.Provider value={value}>
       {children}
   </AppContext.Provider>
}

export default AppContextProvider