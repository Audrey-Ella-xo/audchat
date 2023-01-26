import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm.jsx';

const projectID = "9daccde9-f667-4834-a5c3-7529c990707b"
const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />
  return (
      <ChatEngine 
        height='100vh'
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed  {...chatAppProps} />}
        onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonawm.com/click.mp3')}
      />
  );
}

export default App;
