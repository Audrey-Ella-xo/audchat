import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height='100vh'
        projectID="9daccde9-f667-4834-a5c3-7529c990707b"
        userName="Anita"
        userSecret="123456"
      />
    </div>
  );
}

export default App;
