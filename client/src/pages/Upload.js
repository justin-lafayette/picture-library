import React, {Component} from 'react'
import ImageUpload from '../components/ImageUpload'


class Upload extends Component {
    render (){
      return(
        <div className = 'Upload'>
          <ImageUpload/>
        </div>
      )
    }
  }

  export default Upload;