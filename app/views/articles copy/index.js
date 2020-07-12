
import './styles.scss';
import React from 'react';
import {withRouter} from 'next/router';
import axios from '../../utils'; 
import ArticleV from './ArticleV'; 
class ArticlePage extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            articles:[], 
            params:{ page: 1, size: 20 }, 
        };
         
        this.fetchArticle = this.fetchArticle.bind(this); 
    }   
    fetchArticle(){
        let {articles} = this.state; 
        try{
            axios.get('/article')
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
    componentDidMount(){
        this.fetchArticle();
    }
    render(){
        const {articles} = this.state; 
        return(
            <div className="row">
                <div className="col-md-8">
                    <ArticleV articles={articles} /> 
                </div>
                
            </div>
        )
    }
} 
export default withRouter(ArticlePage)