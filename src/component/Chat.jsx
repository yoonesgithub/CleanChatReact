import React from 'react'

export default function Chat(props) {
    let isLeft = props.Chat.type === 'recieve';
  return (
    <div className={`chat ${isLeft && 'chat-left'}`} >
    <div  className="chat-avatar">
      <a  className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
        <img src={props.Chat.avatar} alt="..."/>
        <i></i>
      </a>
    </div>
    <div className="chat-body" >
      <div className="chat-content">
        <p>
            {props.Chat.message}
          <br/>
        </p>
        <time className="chat-time" dateTime={props.Chat.time}>{props.Chat.time}</time>
      </div>
    </div>
  </div>
  )
}
