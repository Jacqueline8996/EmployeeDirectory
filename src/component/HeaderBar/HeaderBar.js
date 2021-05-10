import{ Component } from 'react';
import Logo from "./Logo.png"


class HeaderBar extends Component {
   
    render(){
        return(
          <div className="row justify-content-md-center">
            <img src={Logo} className="logoImage col-md-12 p-3" alt="logo"/>
          </div>
        )
    }

    
};
  
export default HeaderBar;