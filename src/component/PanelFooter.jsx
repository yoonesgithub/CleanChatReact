import React, { Component } from 'react'

export default class PanelFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Message: ''
    }
    this.setMessage = this.setMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  setMessage(event) {
    this.setState({
      Message: event.target.value
    })
  }
  sendMessage() {
    this.props.sendMessage(this.state.Message);
    this.setState({
      Message: ''
    })
  }
  render() {
    return (
      <div className="panel-footer">
      <form>
        <div className="input-group">
          <input
            onChange={this.setMessage}
            value={this.state.Message}
            type="text"
            className="form-control"
            placeholder="Say something"
          />
          <span className="input-group-btn">
            <button  onClick={this.sendMessage} className="btn btn-primary" type="button">
              Send
            </button>
          </span>
        </div>
      </form>
    </div>
    )
  }
}
