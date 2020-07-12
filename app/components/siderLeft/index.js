

import './styles.scss';
import React from 'react';
import {withRouter} from 'next/router';
import axios from '../../utils'; 
import RightV from './RightV'; 
class ArticlePage extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            articles:[], 
            dateArticles:[],
            params:{ page: 1, size: 20 }, 
        };
         
        this.fetchArticle = this.fetchArticle.bind(this); 
    }   
    fetchArticle(){
        let {articles} = this.state; 
        const {query} = this.props.router; 
        // console.log(query)
        try{
            axios.get(`/api/article`)
             .then(res => {  
                if(res.data){ 
                    articles = res.data.data || []
                    this.setState({ articles }); 
                    return articles 
                }
             })
        }catch(err){ 
            throw err 
        }
    }
    fetchArticleDate(){
        let {dateArticles} = this.state; 
        const {query} = this.props.router; 
        console.log(query,'===>?')
        try{
            axios.get(`/api/article/${query.slug}`)
             .then(res => {  
                if(res.data){ 
                    dateArticles = res.data.data || []
                    this.setState({ dateArticles });  
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
            this.fetchArticleDate();
        }
    }
    render(){
        const {articles} = this.state; 
        return(
            <div className="row">
                <div className="col-md-12">
                    <RightV articles={articles} /> 
                </div>
                
            </div>
        )
    }
} 
export default withRouter(ArticlePage)