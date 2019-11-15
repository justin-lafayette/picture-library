import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Alert } from 'react-bootstrap'
 
class Scanner extends Component {
  state = {
    event_id: null,
    scanFail: false
  }

  goToEvent = (data) => {
    this.setState({event_id: data}, () => {
        
        console.log(this.state.event_id)
        this.props.history.push(`/event/${data}`, [this.state.event_id])
    
    })   
  }
 
  handleScan = data => {
    if (data) {
      //rather than just setting the state (see below), we will make an axios request to something like "/events/join/:event_id"
      //the "/events/join/:event_id" route handler will simply add a record to your database that associates the current user with the event_id
      this.goToEvent(data)
    } else {
      this.setState({scanFail: true})
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
          {this.state.scanFail ? (
            <Alert>Scan failed</Alert>
          ):(<></>)}
        </div>
      </div>
    )
  }
}

export default Scanner;