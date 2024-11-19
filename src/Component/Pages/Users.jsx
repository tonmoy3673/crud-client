import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const [allUsers,setAllUsers]= useState([]);
  const [length,setLength] = useState(3);
  const [loading,setLoading] = useState(false)
  const users = useLoaderData();
  

  useEffect(()=>{
    setAllUsers(users)
    
    
  },[users]);

const handleDelete =(id)=>{
  setLoading(true)
  console.log(id);
  fetch(`http://localhost:5000/users/${id}`,{
    method:'DELETE',
    headers:{
      'content-type': 'application/json'
    },
    
  })
  .then((res)=>res.json())
  .then((data)=>setAllUsers(data))
  setLoading(false)
}


  return (
    <div>
      <h2 className="text-center py-8 text-2xl font-semibold">All Users</h2>
      <>
     { loading && <p>Loading ............</p>}
      </>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            allUsers && allUsers.slice(0,length).map((user)=><User handleDelete={handleDelete} key={user._id} user={user}/>)
        }
      </div>
      <div className="py-8 text-center">
        {
         length && length < allUsers.length ? <button className="bg-blue-500 px-2 py-1 rounded-md text-white hover:bg-amber-500 hover:text-black" onClick={()=>setLength(length+3)}>
          Show More
        </button> : "No Data Available"
        }
      </div>
    </div>
  );
};

export default Users;
