import { Add } from 'iconsax-react';
import Card from './components/card';
import './styles/App.css';
import Modal from './components/modal';
import { useState } from 'react';
import uuid from 'react-uuid';
import Websuckit from '@websuckit/js';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [textValue, setTextValue] = useState();
  const [nickname, setNickname] = useState();

  // const websuckitInit = new Websuckit({
  //   userId: process.env.REACT_APP_WEBSUCKIT_USER_ID,
  //   // accessKey: process.env.REACT_APP_WEBSUCKIT_ACCESS_KEY,
  //   publicKey: process.env.REACT_APP_WEBSUCKIT_PUBLIC_KEY
  // });

  // const connectionUrl = websuckitInit.getConnectionUrl({
  //   channelName: "sca-minna-affirmation-board",
  //   channelPassKey: "bF3pGbQHmcTy5uBg2VLn",
  // }).value;
  
  // const ws = new WebSocket(connectionUrl);
  // ws.addEventListener("close", (event) => {
  //   console.log("The connection has been closed successfully.");
  // });
  
  // ws.addEventListener("open", (event) => {
  //   console.log("The connection has been opened successfully.");
  // });

  // ws.addEventListener("message", (event) => {
  //   console.log("Message from server ", event.data);
  //   const data = JSON.parse(event.data);
  //   console.log(data);
  // });

  // const addNote = (newTask) => {
  //   // addNewTask(newTask);
  //   ws.send(JSON.stringify(newTask));
  // };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log({
      id:  uuid(),
      nickname,
      value: textValue,
    });

    // Reset the form value after submission if needed
    // setFormValue('');
    setOpen(false);
  };

  return (
    <section className='section'>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='add-button' onClick={() => setOpen(true)}>
        <Add color='#ffffff' />
      </div>
      {isOpen && 
        <Modal onClose={() => setOpen(false)}>
          <form onSubmit={handleSubmit}>
            <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} />
            <button type='submit' className='post-button'>Add to board</button>
          </form>
        </Modal>
      }
    </section>

  );
}

export default App;
