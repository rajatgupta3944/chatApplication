import React,{useState} from 'react';
import axios from 'axios';

const projectID = 'ad0505d2-61c2-4015-b369-6e6a6f2fb65d';
const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = {'Project-ID': projectID, 'User-Name': userName, 'User-Secret': password};
        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);
            window.location.reload();
            setError('')
        }
        catch(err){
            setError('Oops, incorrect credentials');
        } 
    }
  return (
    <div className='wrapper'>
        <div className="form">
            <h1 className="title">
                Chat Application 
            </h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='input' placeholder='username' required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='password' required />
                <div align='center'>
                    <button className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
            </form>
            <h1>{error}</h1>
        </div>
    </div>
  )
}

export default LoginForm