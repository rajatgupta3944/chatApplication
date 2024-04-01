import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('userName')) return <LoginForm /> 
  return (
      <ChatEngine 
      height="100vh"
      projectID={process.env.REACT_APP_PROJECTID}
      userName={localStorage?.getItem('userName') || 'john'}
      userSecret={localStorage?.getItem('password') || 'qwerty'}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
  );
}

export default App;
