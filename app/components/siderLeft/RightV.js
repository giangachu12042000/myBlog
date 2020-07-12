
import './styles.scss'
import React from 'react';
import {withRouter} from 'next/router';
import {URL_ROOT} from '../../config'
import Link from 'next/link';
import Moment from 'moment'
const ArticelV = (props)=>{
    const {articles} = props;
   
    let aa = []; 
    articles && articles.length > 0 ? articles.map((item,key)=> { 
      const format =   Moment(item.created_date).format("YYYY-MM");
        if(aa.lastIndexOf(format) == -1){
            aa.push(format); 
            return aa
        }
    }) : [] ;
    
    return(
        <div className="box"> 
            {
                aa && aa.length > 0 ? aa.map((item,key)=> {
                    //  console.log(item,'=====>?')
                    return(
                        <div  key={key} className="row">
                            <p>
                                <Link href={'/bai-viet-trong-thang/[slug]'} as={`/bai-viet-trong-thang/${item}`} >
                                    <a>
                                        <span>{item}</span>
                                    </a>
                                </Link>
                            </p>
                        </div>
                    )
                }) : <p>not find products</p>
            }
        </div>
    )
}

export default ArticelV