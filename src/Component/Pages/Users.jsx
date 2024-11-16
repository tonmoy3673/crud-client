import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  const [allUsers,setAllUsers]= useState([]);

  useEffect(()=>{

  },[])

  console.log(users);
  return (
    <div>
      <h2 className="text-center py-8 text-2xl font-semibold">All Users</h2>
      <div>

      </div>
    </div>
  );
};

export default Users;
