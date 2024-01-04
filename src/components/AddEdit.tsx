import { useState } from "react";
import { User } from "../models/studennt.model";
import { useAddUserMutation } from "../features/userDetailApi";
import { useNavigate } from "react-router-dom";

const AddEdit = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState<User>(Object);
    const [addUser] = useAddUserMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addUser(users)
        navigate("/");
        // console.log(users);

    }


    return (
        <>
            {/* <div className="mt-20"></div> */}
            <div className="min-w-lg  h-screen  flex justify-center items-center  ">
                <form onSubmit={handleSubmit} className="bg-slate-300 w-1/4 shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="username" type="text" onChange={handleChange} placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >
                            Email
                        </label>
                        <input onChange={handleChange} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="">
                        <label className="block text-sm  text-gray-700 font-bold " htmlFor="user_avatar">Upload file</label>
                        <input className="block w-full text-sm text-gray-700 p-1  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" name="pic" />
                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none  w-full focus:shadow-outline" type="submit">
                            Add Me
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddEdit
