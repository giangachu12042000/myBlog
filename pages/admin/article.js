
import React from 'react';  
import Article from '../../app/admin/article';
const ArticlePage = ()=>{
    return(
        <Article /> 
    )
}
ArticlePage.getInitialProps = async (props, res)=>{
    const { isServer } = props.ctx
    return { isServer }
}
export default ArticlePage