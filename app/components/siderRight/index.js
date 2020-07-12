

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
            search: null,
            params:{ page: 1, size: 20 }, 
        };
         
        this.fetchArticle = this.fetchArticle.bind(this); 
        this.getsearch = this.getsearch.bind(this)
    }   
    getsearch(even){
        let {search} = this.state; 
        const value = even.target.value; 
        search = value;
        this.setState({search}); 
        this.fetchArticle()
    }
    fetchArticle(){
        let {articles, search} = this.state; 
        try{
            axios.get('/api/article',{params:{search}})
             .then(res => {
                if(res.data){
                    articles = res.data.data || []
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
                    <RightV articles={articles} getsearch={this.getsearch} />
                </div>
            </div>
        )
    }
}
export default withRouter(ArticlePage)