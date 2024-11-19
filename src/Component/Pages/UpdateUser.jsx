const UpdateUser =()=>{

    const handleUpdate =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const updatedUser = {
            name,email,photo
        }

        try{
            fetch(`http://localhost:5000/users/`)
        }
        catch (error){
            console.log(error.message);
        }
        
      

    }
    return (
        <div>
            <div className="bg-slate-200 py-8 md:py-24 flex justify-center items-center flex-col md:flex-row">
           <div className="ml-4">
           <h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-0 text-blue-600">Add New User</h2>
           </div>
           <>
           {/* {
            loading && <p>Loading ........</p>
           } */}
           </>
            
                <form onSubmit={handleUpdate} className="px-20">
                    <div>
                    <div className="mb-6 flex flex-col md:flex-row items-center">
                        <label className="text-center" htmlFor="name">Name :</label>
                        <input defaultValue={name} required className="py-1 px-2 rounded-md ml-3" type="text" id="name" placeholder="Enter Name">

                        </input>
                    </div>
                    <div className="mb-6 flex flex-col md:flex-row">
                        <label className="text-center" htmlFor="email">Email :</label>
                        <input defaultValue={email} required className="py-1 px-2 rounded-md ml-3" type="email" id="email" placeholder="Enter Email Address">

                        </input>
                    </div>
                    <div className="flex flex-col md:flex-row mb-6">
                        <label className="text-center" htmlFor="photo">Photo :</label>
                        <input defaultValue={photo} required className="py-1 px-2 rounded-md ml-3" type="text" id="photo" placeholder="Enter photo URL">

                        </input>
                        
                    </div>
                        {/* ================= submit button =========== */}
                    <div className="mt-3 md:mt-5 text-center">
                    <button className="bg-blue-600 hover:bg-amber-500 px-2 py-1 text-base text-white hover:text-black rounded-md">
                        Update 
                    </button>
                    </div>
                    </div>
                </form>
            
        </div>
        </div>
    )
};

export default UpdateUser;