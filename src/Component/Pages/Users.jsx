import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  const [allUsers,setAllUsers]= useState([]);

  useEffect(()=>{
    setAllUsers(users)
  },[users])

  console.log(users);
  return (
    <div>
      <h2 className="text-center py-8 text-2xl font-semibold">All Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {
            users && allUsers.map((user)=><User key={user._id} user={user}/>)
        }
      </div>
    </div>
  );
};

export default Users;
