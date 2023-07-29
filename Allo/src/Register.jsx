import {useState} from "react";
import axios from "axios";

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function register(e){
        e.preventDefault();
        await axios.post("/register",{username,password});
    }
    return (
        <div className="bg-amber-200 h-screen flex items-center">
            <form className="w-64  mx-auto mb-12" onSubmit={register}>
                <input type={"text"}
                       placeholder={"username"}
                       className={"block w-full rounded-sm p-2 mb-2 border"}
                       autoComplete={username} onChange={(e) =>{
                    setUsername(e.target.value)
                }}/>
                <input type={"password"}
                       placeholder={"password"}
                       className={"block w-full rounded-sm p-2 mb-2 border"}
                       onChange={(e)=>{
                           setPassword(e.target.value)
                }}/>
                <button className={"bg-green-300 text-white block w-full rounded-sm"} >Register</button>
            </form>
        </div>
    )
}
export default Register;