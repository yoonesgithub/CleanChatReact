import React, { Component } from "react";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import PanelHead from "./PanelHead";

export default class Pannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats : [
        { type: 'sent',
          message: 'Good morning, sir.What can I do for you',
          time: '11:37:08 am',
          avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png'
        },
        { type: 'recieve',
          message: 'Well, I am just looking around.',
          time: '11:39:57 am',
          avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png'

        },
        { type: 'sent',
          message: 'If necessary, please ask me.',
          time: '11:40:10 am',
          avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png'
        }
      ],
      title: 'chat'
    }
    this.sendMessage = this.sendMessage.bind(this);
  }
  sendMessage(message) {
    this.setState(state => {
      return {
        ...state,
        chats: [
          ...state.chats,
          { type: 'sent',
          message: message,
          time: new Date().toLocaleString(),
          avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png'
        }
        ]
      }
    })
  }
  render() {
    return (
      <div className="col-md-7 col-xs-12 col-md-offset-2">
        <div className="panel" id="chat">
          {/* head */}
            <PanelHead title={this.state.title} />
          {/* end of head */}
          {/* body */}
            <PanelBody chats={this.state.chats} />
          {/* end of body */}
          {/* footer */}
            <PanelFooter sendMessage={this.sendMessage} />
          {/* end of footer */}
        </div>
      </div>
    );
  }
}
