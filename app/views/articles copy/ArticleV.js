
import './styles.scss'
import React from 'react';
import {withRouter} from 'next/router';
import {URL_ROOT} from '../../config'
import Link from 'next/link';

const ArticelV = (props)=>{
    const {articles} = props;
    return(
        <div className="box"> 
            {articles && articles.length > 0 ? articles.map((item,key)=>{ 
                console.log(item,'=================>?iem')
                return(  
                    <div  key={key}>
                        <div className="col-md-12 box-image">
                            <Link href={'/article/[slug]'} as={`/article/${item._id}`} >
                                <a >
                                    <img src={URL_ROOT + item.background} width="100%"/>
                                </a>
                            </Link>
                        </div>

                        <div className="col-md-8 offset-md-2 box-content">
                            <h4><span>{item.title}</span> </h4>
                            <p>{item.content}</p>
                        </div>
                    </div>
                )
            }) : <p>not find products</p>} 
        </div>
    )
}

export default ArticelV