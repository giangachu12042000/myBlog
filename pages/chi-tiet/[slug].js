import React from 'react';  
import DetailArticle from '../../app/views/articles/articleDetail';
const DetailArticlePage = ()=>{
    return(
        <DetailArticle /> 
    )
}
DetailArticlePage.getInitialProps = async (props, res)=>{
    const { isServer } = props.ctx
    return { isServer }
}
export default DetailArticlePage