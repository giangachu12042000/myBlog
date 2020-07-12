import React from 'react';

import Login from '../app/admin/auth/loginPage';

const LoginPage = ()=>{
    return(
        <Login /> 
    )
}
LoginPage.getInitialProps = async (props, res)=>{
    const { isServer } = props.ctx
    return { isServer }
}
export default LoginPage