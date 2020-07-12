
import './styles.scss'
import React from 'react';
import {withRouter} from 'next/router';
import {URL_ROOT} from '../../config'
import Link from 'next/link';

const ArticelV = (props)=>{
    const {categories} = props;
    return(
        <div className="box"> 
            {categories && categories.length > 0 ? categories.map((item,key)=>{ 
                console.log(item,'=================>?iem')
                return(
                    <div  key={key} className="col-md-12">
                        <div >
                            <Link href={'/danh-muc/[slug]'} as={`/danh-muc/${item._id}`} >
                                <a >
                                    <img src={URL_ROOT + item.background} width="100%"/>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-8 offset-md-2 box-content">
                            <h4 className="title"><span>{item.name}</span> </h4>
                            <p className="description">{item.description}</p>
                            <Link href={'/danh-muc/[slug]'} as={`/danh-muc/${item._id}`} >
                                <a>
                                    <p><span>Reading more..</span></p>
                                </a>
                            </Link>
                        </div>
                    </div>
                )
            }) : <p>not find products</p>} 
        </div>
    )
}

export default ArticelV