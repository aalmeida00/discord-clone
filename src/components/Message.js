import "./Message.css";
import { Avatar } from "@material-ui/core";

const Message = () => {
  return (
    <div className="message">
      <Avatar src="https://avatars1.githubusercontent.com/u/61947632?s=400&u=0672b7f3845893b17630bf2e80c554e7f622107a&v=4" />
      <div className="message__info">
        <h4>
          aalmeida0
          <span className="message__timestamp">Esse é um tempoestampa</span>
        </h4>
        <p>Mensagem</p>
      </div>
    </div>
  );
};

export default Message;
