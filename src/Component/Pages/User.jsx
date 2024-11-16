const User =({user})=>{
    const {name,email,photo} =user;
    return (
       <div>
         <div className="flex items-center">
            <div>
            <img src={photo}></img>
           </div>
            <div>
            <h2 className="text-lg font-semibold">User Name : {name}</h2>
            <h2 className="mt-2">User Email : <span className="text-blue-500 underline cursor-pointer">
            {email}</span></h2>
            </div>
           
        </div>
            
       </div>
    )
};

export default User;