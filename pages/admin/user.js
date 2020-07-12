
 


import React from 'react'; 
import User from '../../app/admin/users';

const UsersAdmin = () => {
  return (
    <User/> 
  )
}

UsersAdmin.getInitialProps = async (props, res) => {
  const { isServer } = props.ctx
    return { isServer }
}

export default UsersAdmin;


