import React from 'react'
import Chat from './Chat'
export default function PanelBody(props) {
  const chats = props.chats.map((item, index) => {
      return (
        <Chat key={index} Chat={item} />
      )
    })
    return (
      <div className="panel-body">
        <div className="chats">
        {chats}
        </div>
    </div>
    )
}
