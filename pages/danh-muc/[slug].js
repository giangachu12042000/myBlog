
import React from 'react';  
import DetailCategory from '../../app/views/category/categoryDetail';
const DetailCategoryPage = ()=>{
    return(
        <DetailCategory /> 
    )
}
DetailCategoryPage.getInitialProps = async (props, res)=>{
    const { isServer } = props.ctx
    return { isServer }
}
export default DetailCategoryPage