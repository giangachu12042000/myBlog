
 
import React from 'react'; 
import Contact from '../../app/views/contacts';

const ContactAddmin = () => {
  return (
    <Contact/> 
  )
}

ContactAddmin.getInitialProps = async (props, res) => {
  const { isServer } = props.ctx
    return { isServer }
}

export default ContactAddmin;


