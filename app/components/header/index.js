
import React from 'react';
import './style.scss'; 
import { withRouter } from 'next/router'; 
import Link from 'next/link' ;
// import _ from 'lodash'; 
import axios from '../../utils'; 

class HeaderPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {categories:[]}
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
            <div className="row box-header">
                <div className="col-md-3"> </div>
                <div className="col-md-9"> 
                    <ul className="menu">
                        <li className="menu-item">
                            <Link href="/">
                            <a className="item-text">
                                <span>Home</span>
                            </a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/bai-viet-hay">
                            <a className="item-text">
                                <span>Bài viết nổi bật</span>
                            </a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/danh-muc">
                                <a className="item-text">
                                    <span>Danh mục</span>
                                </a>
                            </Link>
                            <ul className="menu-down">
                                {
                                    categories && categories.length > 0 ? categories.map((item,key)=>{
                                        return(
                                            <li key={key} className="list-menu-down">
                                                <Link href={'/danh-muc/[slug]'} as={`/danh-muc/${item._id}`} >
                                                    <a className="link-name">
                                                        <p><span>{item.name}</span></p>
                                                    </a>
                                                </Link>
                                            </li>  
                                        )
                                    }) : ''
                                }
                            </ul>
                        </li>
                        <li className="menu-item">
                            <Link href="/lien-he">
                            <a className="item-text">
                                <span>Liên hệ</span>
                            </a>
                            </Link>
                        </li>
                    </ul> 
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderPage)