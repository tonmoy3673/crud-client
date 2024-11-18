import { useState } from "react";
import Swal from "sweetalert2";

const AddUsers =()=>{
    const [loading,setLoading]=useState(false)
    const handleSubmit= async(event)=>{
        setLoading(true)
        event.preventDefault();
        console.log('clicked');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;

        const user ={
            name,email,photo
        };
        console.log(user);
   
       try {
        const result= await Swal.fire({
            title: "Do you want to Add New User?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Add",
            denyButtonText: `Don't Add`
          })
        if (result.isConfirmed) {
            
        
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(user)
        })
        .then((res)=>res.json())

        .then((data)=>{
            if (data.insertedId) {
                Swal.fire("Added!", "", "success");
              } else {
                Swal.fire("User is not saved", "", "info");
              }
              setLoading (false)
            console.log(data)
        })

        form.reset()
    }
       } catch (error) {
        console.log(error.message);
       }
        finally{
            setLoading (false)
        }
    }

    return (
        <div className="bg-slate-200 py-8 md:py-24 flex justify-center items-center flex-col md:flex-row">
           <div className="ml-4">
           <h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-0 text-blue-600">Add New User</h2>
           </div>
           <>
           {
            loading && <p>Loading ........</p>
           }
           </>
            
                <form onSubmit={handleSubmit} className="px-20">
                    <div>
                    <div className="mb-6 flex flex-col md:flex-row items-center">
                        <label className="text-center" htmlFor="name">Name :</label>
                        <input className="py-1 px-2 rounded-md ml-3" type="text" id="name" placeholder="Enter Name">

                        </input>
                    </div>
                    <div className="mb-6 flex flex-col md:flex-row">
                        <label className="text-center" htmlFor="email">Email :</label>
                        <input className="py-1 px-2 rounded-md ml-3" type="email" id="email" placeholder="Enter Email Address">

                        </input>
                    </div>
                    <div className="flex flex-col md:flex-row mb-6">
                        <label className="text-center" htmlFor="photo">Photo :</label>
                        <input className="py-1 px-2 rounded-md ml-3" type="text" id="photo" placeholder="Enter photo URL">

                        </input>
                        
                    </div>
                        {/* ================= submit button =========== */}
                    <div className="mt-3 md:mt-5 text-center">
                    <button className="bg-blue-600 hover:bg-amber-500 px-2 py-1 text-base text-white hover:text-black rounded-md">
                        Submit 
                    </button>
                    </div>
                    </div>
                </form>
            
        </div>
    )
};

export default AddUsers;