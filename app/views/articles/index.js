
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
            params:{ page: 1, size: 3 }, 
        };
        this.fetchArticle = this.fetchArticle.bind(this); 
    }   
    fetchArticle(){
        let {articles, params} = this.state;
        const {router} = this.props;
        try{
            axios.get('/api/article',{params:params})
             .then(res => {
                if(res.data){
                    // console.log(res.data.data)
                    articles = res.data.data.results || [];
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
    render(){
        const {articles} = this.state; 
        return(
            <div className="row">
                <div className="col-md-12">
                    <ArticleV articles={articles} />
                </div>
            </div>
        )
    }
} 
export default withRouter(ArticlePage)