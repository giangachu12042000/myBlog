

import '../styles.scss'
import React from 'react';
import {withRouter} from 'next/router';
import {URL_ROOT} from '../../../config'
import Link from 'next/link';
import axios from '../../../utils'; 

class DetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {article:null};
        
    }
    fetchArticle(){
        let {article} = this.state; 
        const {query} = this.props.router; 
        try{
            axios.get(`/article/${query.slug}`)
            .then(res => {  
                if(res.data){
                    article = res.data.data ;
                    this.setState({ article }); 
                    return article 
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
        const {article} = this.state; 
        console.log(article,'=============>?')
        return(
            <div className="box">  
                <div className="media">
                    <div className="col-md-12">  
                    {
                        article ? 
                        <div>
                            <h4><span>{ article.title }</span> </h4>
                            <img src={URL_ROOT + article.background} width="100%"/> 
                            <p>{ article.content }</p>
                        </div>
                         : null
                    }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(DetailPage)