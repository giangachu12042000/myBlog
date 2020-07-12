import React from 'react';  
import HighArticle from '../../app/views/highArticle';
const HighArticlePage = ()=>{
    return(
        <HighArticle /> 
    )
}
HighArticlePage.getInitialProps = async (props, res)=>{
    const { isServer } = props.ctx
    return { isServer }
}
export default HighArticlePage