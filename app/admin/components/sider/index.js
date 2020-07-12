
import './style.scss'; 
import React from 'react';
import axios from '../../../utils';
import Link from 'next/link';


class Sider extends React.Component{
    constructor (props){
        super(props);
        this.state = { 
            categories: [] 
        }
    }
    fetchCategories(){
        try{
            axios.get('/api/category')
            .then(result =>{
                const {data} = result.data;
                this.setState({categories:data});
            })
        }
        catch(err){
            throw err
        }
    }
    componentDidMount(){
        this.fetchCategories()
    }
    render(){
        const {categories} = this.state;
        return(
            <div className="sider-box">  
                 <div > 
                    <Link href={`/admin/category`}>
                        <a>
                            <p><span>Danh mục</span></p>
                        </a>
                    </Link>
                </div>
                <div > 
                    <Link href={`/admin/article`}>
                        <a>
                            <p><span>Bài viết</span></p>
                        </a>
                    </Link>
                </div>
                <div > 
                    <Link href={`/admin/comment`}>
                        <a>
                            <p><span>Liên hệ</span></p>
                        </a>
                    </Link>
                </div>
            </div> 
        )
    }
}

export default  Sider