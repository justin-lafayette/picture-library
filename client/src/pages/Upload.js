import React, {Component} from 'react'
import ImageUpload from '../components/ImageUpload';
import SiteNavbar from '../components/SiteNavbar';
import Api from '../utils/Api';


class Upload extends Component {

  state = {
    email: this.props.email || "" ,
    isAuth: this.props.isAuth,
    event_id: ""
  }

  componentDidMount() {
    Api.isAuth()
        .then( res => {
            if( res.data.user ) {
            this.setState({
                email: res.data.user.email,
                isAuth: true
            });
            } else {
            this.setState({
                email: "",
                isAuth: false
            })
            this.props.history.push('/login');
            }
        })
  }

    render (){
      return(
        <>
          <SiteNavbar
            isAuth={this.state.isAuth}
          />
          
          <div className = 'Upload'>
            <ImageUpload/>
          </div>
        </>
      )
    }
  }

  export default Upload;