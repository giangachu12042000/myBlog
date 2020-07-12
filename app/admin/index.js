
import React from 'react';
import {withRouter} from 'next/router'; 
import Sider from './components/sider';
const AdminApp = (props)=>{ 
    return(
        <div className="row">
            <div className="col-md-12">header</div>
            <div className="col-md-4"><Sider /></div>
            <div className="col-md-8">{props.children}</div>
        </div>
    )
}
export default withRouter(AdminApp)
