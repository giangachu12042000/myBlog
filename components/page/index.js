
import React from 'react';
import {withRouter} from 'next/router';

class Page extends React.Component{

    render(){
        const {children} = props;
        return (
            <div className="container"> 
                {children}
            </div>
        )
    }
}
export default withRouter(Page)