

import '../styles.scss'
import React from 'react';
import {withRouter} from 'next/router';
import {URL_ROOT} from '../../../config'
import Link from 'next/link';
import axios from '../../../utils'; 
import Moment from 'moment'; 
import ModalV from '../../../admin/components/modal'; 
class DetailPage extends React.Component{
    constructor(){
        super();
        this.state = {
            article:null,
            modal:false,
            message: false,
            modleShow:false,
            showSucess: false,
            sucess: null,
            comments:[],
            open:false,
            reply: false,
            nameReply:null,
            articleId :null,
            listReply:[]
        }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSucces = this.handleSucces.bind(this);
        this.opentSucces = this.opentSucces.bind(this);
        this.openFormReply = this.openFormReply.bind(this);
        this.handleSubmitReply = this.handleSubmitReply.bind(this);
        this.handleChangeReply = this.handleChangeReply.bind(this);
        this.setNameReply = this.setNameReply.bind(this)
    }
    // ======================================================comment part
    handleChange(e){
        let {message} = this.state;
        message = e.target.value;
        this.setState({message});
        
    }
    handleChangeReply(e){
        let {reply} = this.state;
        reply = e.target.value;
        this.setState({reply});
    }
    opentSucces(param){
        let {sucess} = this.state;
        sucess = param;
        this.setState({sucess}); 
    }
    handleSucces(param){
        let {showSucess} = this.state;
        showSucess = param;
        this.setState({showSucess}); 
        let close = false;
        setTimeout(()=>{
            showSucess = close;
            this.setState({showSucess}); 
        },2500)
    }
    handleSubmit(){
        event.preventDefault();
        let {message,article} = this.state;
        const getArticleId = article._id;
        axios.post('/api/comment/add',{message,id:getArticleId})
        .then(res =>{
            this.opentSucces(res.data.message);
            this.handleSucces(true);
            this.fetchComment();
        })
    }
    handleSubmitReply(){
        event.preventDefault();
        let {reply,nameReply,articleId} = this.state; 
        axios.put('/api/comment/reply',{reply,name:nameReply,id:articleId})
        .then(res=>{
            this.fetchArticle(); 
            this.fetchComment()
            // ==========================================================================>>
        })
    }
    setNameReply(param,id){ 
        this.setState({nameReply:param}); 
        this.setState({articleId:id});
    }
    openFormReply(param){
        axios.put('/api/comment/open',{id:param})
        .then(res=>{
            if(res.data){  
                this.fetchComment();
            }
        })
    }
    handleReply(){
        const {article} = this.state; 
        axios.get('/comment/reply',{params:query})
        .then(res=>{
            let {data} = res.data;
            this.setState({comments:data});
        })
    }
    fetchComment(){
        const {query} = this.props.router;
        let {comments} = this.state;
        axios.get('/api/comment',{params:query})
        .then(res=>{
            let {data} = res.data; 
            comments = data;
            this.setState({comments});  
        })
    }
    //======================================================== comment
    fetchArticle(){
        let {article} = this.state; 
        const {query} = this.props.router;  
        try{
            axios.get(`/api/article/${query.slug}/`)
            .then(res => {
                if(res.data){
                    article = res.data.data ;  
                    this.handleUpdateView(article);
                }
            })
        }catch(err){
            throw err
        }
    }
    
    handleUpdateView(article){
        try{
            axios.put(`/api/article/${article.views}/${article._id}`)
            .then(result=>{
                if(result){
                    const {data} = result.data; 
                    this.setState({ article: data }); 
                }
            })
        } catch(err){
            throw err
        }
    }
    componentDidMount(){
        this.fetchArticle(); 
        this.fetchComment();
    }
    componentDidUpdate(props){
        const {query} = this.props.router; 
        const oldeQuery = props.router.query;
        if(query && query.slug && oldeQuery.slug && query.slug  !== oldeQuery.slug) { 
            this.fetchArticle();
        }
    }
    render(){
        const {article,showSucess,sucess,comments,listReply} = this.state; 
        return(
            <div className="box">  
                <div className="media box-detail">
                    <div className="col-md-12">  
                        {
                            article ? 
                            <div>
                                <h4><span>{ article.title }</span> </h4>
                                <img src={URL_ROOT + article.background} width="100%"/>  
                                <div className="col-md-8 offset-md-2">
                                    <div className="row">
                                        <p className="col-md-4">
                                            <span className="views">{article.views <= 1 ? article.views + ' view' : article.views + ' views'}</span> 
                                        </p>
                                        <p className="col-md-4">
                                            <span className="views">{Moment(article.created_date).format("DD-MM-YYYY")}</span> 
                                        </p>
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML = {{ __html : article.content }} />
                                <div className="row">
                                    <div className="col-md-12">
                                        {
                                            comments && comments.length > 0 
                                                ? comments.map((item,key)=>{ 
                                                    
                                                        return(
                                                            <div className="row border-bottom-1px" key={key}> 
                                                                <div className="col-md-2">
                                                                    <p>{item.reply_by}</p>
                                                                </div>
                                                                <div className="col-md-10">
                                                                    <p>{item.message}</p>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="col-md-12">
                                                                                { 
                                                                                    item.reply.map((reply,key)=>{
                                                                                        return(
                                                                                            <div key={key}>
                                                                                                <p>{reply.message}</p>
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-10">
                                                                            {
                                                                                item.open == true ?
                                                                                    <form  method='post' encType="multipart/form-data" onSubmit={this.handleSubmitReply} >
                                                                                        <div className="form-group"> 
                                                                                            <textarea name="message" placeholder="Trả lời"  className="form-control" rows="1" onChange={this.handleChangeReply} > 
                                                                                            </textarea>
                                                                                        </div>
                                                                                        <div className="btn-group">
                                                                                            <button type="submit" className="btn btn-primary" >submit</button> 
                                                                                        </div>
                                                                                    </form>
                                                                                : <div></div>
                                                                            }
                                                                        </div>
                                                                            {
                                                                                item.open ? <div> </div> :
                                                                                <button onClick={()=>{this.openFormReply(item._id); this.setNameReply(item.reply_by,item._id)} }>Trả lời</button>
                                                                            }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                : <p>không có bình luận nào</p>
                                        }
                                        
                                    </div> 
                                    <div className="col-md-6 offset-md-3">
                                        <p></p>
                                        <form  method='post' encType="multipart/form-data" onSubmit={this.handleSubmit} >
                                            <div className="form-group"> 
                                                <textarea name="message" placeholder="Bình luận"  className="form-control" rows="2" onChange={this.handleChange} > 
                                                </textarea>
                                            </div> 
                                            <div className="btn-group">
                                                <button type="submit" className="btn btn-primary" >submit</button> 
                                            </div>
                                        </form> 
                                    </div>
                                    {/* <ModalV sucess = {sucess} handleSucces ={this.handleSucces} showSucess ={showSucess} /> */}
                                </div>
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