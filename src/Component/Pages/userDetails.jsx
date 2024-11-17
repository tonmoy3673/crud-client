import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {_id, photo,name,email} = user;

    return (
        <div className="mx-auto">
            <div className="flex items-center justify-center">
            <div>
            <img src={photo}></img>
           </div>
            <div>
                <h2>User ID : {_id}</h2>
            <h2 className="text-lg font-semibold">User Name : {name}</h2>
            <h2 className="mt-2">Email : <span className="text-blue-500 underline cursor-pointer">
            {email}</span></h2>
            </div>
            
           
           
        </div>
        </div>
    );
};

export default UserDetails;