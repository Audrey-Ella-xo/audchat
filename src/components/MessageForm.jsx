import { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {

  const [value, setValue] = useState('');
  const { chatIde, creds } = props;
  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatIde)
  }

  const handleSubmit = (s) => {
    s.preventDefault();
    const text = value.trim();

    if (text.length > 0){
      sendMessage(creds, chatIde, { text })
    }
    setValue('');
  }

  const handleUpload = (u) => {
    sendMessage(creds, chatIde, {files: u.target.files, text:' '})
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange} 
        onSubmit={handleSubmit}     
      />

      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined 
            className="picture-icon"
          />
        </span>
      </label>

      <input type="file" multiple={false} id='upload-button' style={{display: none}} onChange={handleUpload}/>
      <button type="submit" className="send-button">
        <SendOutlined className='send-icon' />
      </button>
    </form>
  )
}

export default MessageForm