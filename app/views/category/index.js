
import './styles.scss';
import React from 'react';
import {withRouter} from 'next/router';
import axios from '../../utils'; 
import CategoryV from './CategoryV'; 
class CategoryPage extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            categories:[], 
            params:{ page: 1, size: 20 }, 
        }; 
        this.fetchArticle = this.fetchArticle.bind(this); 
    }   
    fetchArticle(){
        let {categories} = this.state; 
        try{
            axios.get('/api/category')
             .then(res => {  
                if(res.data){ 
                    categories = res.data.data || []
                    this.setState({ categories }); 
                    return categories 
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
        const {categories} = this.state; 
        return(
            <div className="row">
                <div className="col-md-12">
                    <CategoryV categories={categories} /> 
                </div>
                
            </div>
        )
    }
} 
export default withRouter(CategoryPage)