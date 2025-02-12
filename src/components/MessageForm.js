import React,{useState} from 'react';
import {SendOutlined, PictureOutlined} from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const {chatId, creds} = props;
  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if(text.length > 0){
      sendMessage(creds, chatId, {text});
    }
    setValue('');
  }
  const handleUpload = (event) => {
    sendMessage(creds, chatId, {files: event.target.files, text: ''})
  }
  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input type="text" value={value} className="message-input" placeholder='send a message...' onChange={handleChange} onSubmit={handleSubmit} />
      <label>
        <span className="image-button">
          <PictureOutlined className='picture-icon' />
        </span>
      </label>
      <input type="file" multiple={false} id="upload-button" style={{display: 'none'}} onChange={handleUpload.bind(this)} />
      <button className="send-button" type='submit'>
        <SendOutlined className='send-icon' />
      </button>
    </form>
  )
}

export default MessageForm