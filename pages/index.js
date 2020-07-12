import React from 'react';  
import Article from '../app/views/articles';
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