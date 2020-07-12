
import './styles.scss'
import React from 'react';
import {withRouter} from 'next/router';
import {URL_ROOT} from '../../config'
import Link from 'next/link';

const ArticelV = (props)=>{
    const {articles, getsearch} = props; 
    return(
        <div className="box-right"> 
            <form  method='post' encType="multipart/form-data" >
                <div className="row">
                    <div className="col-md-8 text-search">
                        <input type="text" className="form-control" onChange={getsearch} name="search" placeholder="search"/>
                    </div>
                </div>
            </form>
            {
                articles && articles.length > 0 ? articles.map((item,key)=>{
                    return(
                        <div  key={key} className="row mb-15">
                            <div className="col-md-4 box-image">
                                <Link href={'/chi-tiet/[slug]'} as={`/chi-tiet/${item._id}`} >
                                    <a>
                                        <img src={URL_ROOT + item.background} width="100%" />
                                    </a>
                                </Link>
                            </div>
                            <div className="box-content">
                                <h5 className="title"><span>{item.title}</span> </h5>
                            </div>
                        </div>
                    )
                }) : <p>not find products</p>
            }
        </div>
    )
}

export default ArticelV