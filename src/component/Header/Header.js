import{ Component } from 'react';


import Table from 'react-bootstrap/Table'


class Header extends Component {
    state = {
        employees: []
    }
  
  
    render(){
        return(
            <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
          </Table>
                
        )
    }

    
};
  
export default Header;