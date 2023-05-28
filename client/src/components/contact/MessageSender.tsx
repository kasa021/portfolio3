import axios from "axios";

interface MessageSender {
  name: string;
  email: string;
  message: string;
}

const MessageSender = (name: string, email: string, message: string) => {
  const data = {
    name: name,
    email: email,
    message: message,
  };

  return axios.post("http://localhost:3001/message", data);
};

export default MessageSender;
