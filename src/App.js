import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx'

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height='100vh'
        projectID="9daccde9-f667-4834-a5c3-7529c990707b"
        userName="Anita"
        userSecret="123456"
        renderChatFeed = {(chatAppProps) => <ChatFeed  {...chatAppProps} />}
        onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonawm.com/click.mp3')}
      />
    </div>
  );
}

export default App;
