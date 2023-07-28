import {useState} from "react";

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="bg-amber-200 h-screen flex items-center">
            <form className="w-64  mx-auto mb-12">
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
                }}/>
                <button className={"bg-green-300 text-white block w-full rounded-sm"} >Register</button>
            </form>
        </div>
    )
}
export default Register;