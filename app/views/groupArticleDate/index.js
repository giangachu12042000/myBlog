

import './styles.scss'
import React from 'react';
import {withRouter} from 'next/router';
import {URL_ROOT} from '../../config'
import Link from 'next/link';
import axios from '../../utils'; 

class DetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
                     articles:[],
                    };
        
    }
    fetchArticle(){
        let {articles} = this.state; 
        const {query} = this.props.router; 
        console.log(query,'=====q===>query')
        try{
            axios.get(`/date_article/${query.slug}`)
            .then(res => {
                if(res.data){
                    articles = res.data.data ;
                    this.setState({ articles }); 
                }
            })
        }catch(err){
            throw err
        }
    } 
    componentDidMount(){
        this.fetchArticle();
    }
    componentDidUpdate(props){
        const {query} = this.props.router; 
        
        console.log(query)
        const oldeQuery = props.router.query;
        if(query && query.slug && oldeQuery.slug && query.slug  !== oldeQuery.slug) { 
            console.log(query,'==============>>>asdf')
            this.fetchArticle();
        }
    }
    render(){
        const {articles} = this.state;
        console.log(articles,'=============1>?')
        return(
            <div className="box"> 
                    <div className="row">
                  {
                      articles && articles.length > 0 ? articles.map((item,key)=>{
                          return(
                            <div  key={key} className="col-md-4 border pt-3"> 
                                <Link href={'/chi-tiet/[slug]'} as={`/chi-tiet/${item._id}`} >
                                    <a >
                                        <img src={URL_ROOT + item.background} width="100%"/>
                                    </a>
                                </Link> 
                                <div className="col-md-8 offset-md-2 box-content ">
                                    <h4 className="mt-2 text-center"><span>{item.title}</span> </h4>
                                    <p className="description">{item.content}</p>
                                    <Link href={'/chi-tiet/[slug]'} as={`/chi-tiet/${item._id}`} >
                                        <a>
                                             <span>Reading more..</span> 
                                        </a>
                                    </Link>
                                </div>
                            </div>
                          )
                      }) : ''
                  }
                        
                </div>
            </div> 
        )
    }
}

export default withRouter(DetailPage)