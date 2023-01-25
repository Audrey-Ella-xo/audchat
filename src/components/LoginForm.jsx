import { useState } from "react";
import axios from "axios";

const projectID = "9daccde9-f667-4834-a5c3-7529c990707b"

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password}
        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        }catch (err) {
            setError('Opps, incorrect credentials')
        }
    }
  return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Audchat Application</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder="Password" required />
                <div align="center">
                    <button className="button">
                        <span>start chatting</span>
                    </button>
                </div>
            </form>
            <h1>{error}</h1>
        </div>
    </div>
  )
}

export default LoginForm
