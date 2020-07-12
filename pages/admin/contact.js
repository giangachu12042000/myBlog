
 
import React from 'react'; 
import Comment from '../../app/admin/contacts';

const CommentAddmin = () => {
  return (
    <Comment/> 
  )
}

CommentAddmin.getInitialProps = async (props, res) => {
  const { isServer } = props.ctx
    return { isServer }
}

export default CommentAddmin;


