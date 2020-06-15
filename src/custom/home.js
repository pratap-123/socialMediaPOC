import React ,{Component} from 'react';
import Aggrid from './aggrid';
import Mapping from '../main';


class Home extends Component{
    render(){
        return(
            <div>
            
            <Aggrid/>
            <Mapping/>
            </div>
        );
    }
}
export default Home;