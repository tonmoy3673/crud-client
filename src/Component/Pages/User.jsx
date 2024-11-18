import { BsCartXFill, BsEyeFill, BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const User =({user,handleDelete})=>{
    const {name,email,photo,_id} =user;
    return (
       <div>
         <div className="flex items-center">
            <div>
            <img src={photo}></img>
           </div>
            <div className="-ms-5">
            <h2 className="text-lg font-semibold">{name}</h2>
            <h2 className="mt-2"><span className="text-blue-500 underline cursor-pointer">
            {email}</span></h2>
            </div>
            <div className="flex items-end justify-center flex-col gap-y-4 ms-6">
                <Link to={`/users/${_id}`}>
                <BsEyeFill />
                </Link>
                <Link>
                <BsPencilFill />
                </Link>
                <Link>
                <BsCartXFill onClick={()=>handleDelete(_id)} />
                </Link>
            </div>
           
           
        </div>
       
       </div>
    )
};

export default User;