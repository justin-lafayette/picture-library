import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { Document } from 'react-pdf/dist/entry.webpack';
 
class About extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (

        <Navbar
            isAuth={this.state.isAuth}
            >
                <Button
                // disabled={!(this.state.QrReader)}
                    onClick={this.showScanner}>
                    QRscan
                </Button>
                        
        </Navbar>

      <div>
        <Document
          file="./assets/limits.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}
  