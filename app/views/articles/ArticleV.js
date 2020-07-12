
import './styles.scss'
import React from 'react';
import {withRouter} from 'next/router';
import {URL_ROOT} from '../../config'
import Link from 'next/link';
import Moment from 'moment'; 
const ArticelV = (props)=>{
    const {articles} = props;
    return(
        <div className="box"> 
            {articles && articles.length > 0 ? articles.map((item,key)=>{ 
                return(
                    <div  key={key} className="row">
                        <div className="col-md-12 box-image">
                            <Link href={'/chi-tiet/[slug]/view'} as={`/chi-tiet/${item._id}`} >
                                <a>
                                    <img src={URL_ROOT + item.background} width="100%"/>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-8 offset-md-2 box-content">
                            <h4 className="title"><span>{item.title}</span> </h4>
                            <div className="row">
                                <p className="col-md-4">
                                    <span className="views">{item.views <= 1 ? item.views + ' view' : item.views + ' views'}</span> 
                                </p>
                                <p className="col-md-4">
                                    <span className="views">{Moment(item.created_date).format("DD-MM-YYYY")}</span> 
                                </p>
                            </div>
                            <div className="description" dangerouslySetInnerHTML = {{ __html : item.content }} />
                            <Link href={'/chi-tiet/[slug]'} as={`/chi-tiet/${item._id}`} >
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