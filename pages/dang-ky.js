
import React from 'react';

import Resister from '../app/admin/users/add';

const ResisterPage = ()=>{
    return(
        <Resister /> 
    )
}
ResisterPage.getInitialProps = async (props, res)=>{
    const { isServer } = props.ctx
    return { isServer }
}
export default ResisterPage