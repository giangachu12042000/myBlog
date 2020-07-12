
import './styles.scss';
import {withRouter} from 'next/router';
import Headers from '../app/components/header';
import LeftV from '../app/components/siderLeft';
import RightV from '../app/components/siderRight'
const MainPage = (props)=>{
    
    return (
        <div className="row"> 
            <header className="col-md-12" ><Headers /></header> 
            <div className="container">
                <div className="row"> 
                    <div className="col-md-8 container-main">
                        {props.children}
                    </div>
                    <div className="col-md-4 box">
                        <RightV />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default withRouter(MainPage)