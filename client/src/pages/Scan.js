import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class Scanner extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      //rather than just setting the state (see below), we will make an axios request to something like "/events/join/:event_id"
      //the "/events/join/:event_id" route handler will simply add a record to your database that associates the current user with the event_id
      this.setState({
        result: data
      })
    }
  }

  handleError = err => {
    console.error(err)
  }
  render() {
    return (
        <div className="jumbotron" style={{marginTop: 20, marginLeft: 350, marginRight: 350,  borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '200px' }}
        />
        <p>{this.state.result}</p>
      </div>
      </div>
    )
  }
}

export default Scanner;