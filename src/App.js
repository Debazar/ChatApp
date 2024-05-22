import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine 
      height="100vh"
      projectID="f303da2a-6741-4e12-9192-90efd8031070"
      userName="Ghetrude"
      userSecret="Ghetty"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = {()=> new Audio('https://chat-engine-assets.s3.amazonaws.com.mp3').play}
      />
    </div>
  );
}

export default App;
