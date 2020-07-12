
 
import React from 'react';
import {withRouter} from 'next/router';
import axios from '../../utils'; 
import ModalV from '../components/modal';
import ContactAdd from './ContactAdd';
import ContacttV from './ContactV';

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            modal:false,
            comments : [],
            comment: null,
            modleShow:false,
            handleGetId: null,
            modal: false,
            message: null,
            replyId: null,
            hideReply: null
        }
        this.handleModal = this.handleModal.bind(this);
        this.fetchComment = this.fetchComment.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.deleteConfirm = this.deleteConfirm.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleReply = this.handleReply.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleModal(param){
        let {modal} = this.state;
        modal = param;
        this.setState({modal});
    }
    fetchComment(){
        let {comments} = this.state;
        axios.get('/api/comment')
        .then(res =>{
            const {data, code} = res.data;
            comments = data;
            this.setState({comments});
        })
    }
    deleteConfirm(param){
        let {modleShow} = this.state;
        modleShow = param; 
        this.setState({modleShow});
         
    }
    handleDelete(param){
        let {handleGetId} = this.state;
        handleGetId = param;
        this.setState({handleGetId});
    }
    handleRemove(param){
        const id = param; 
        this.deleteConfirm(true); 
        try{
            axios.delete(`/api/comment/delete/${id}`)
             .then(res => {
                if(res.data){
                    this.fetchComment();
                }
             })
        }catch(err){ 
            throw err 
        }
    }
    handleModal(param){
        let {modal} = this.state;
        modal = param;
        this.setState({modal});
    }
    handleReply(param){
        let {comment} = this.state;
        comment = param;
        this.setState({comment});
    }
    handleChange(e){
        let {message} = this.state;
        message = e.target.value;
        this.setState({message}); 
    }
    handleSubmit(){
        event.preventDefault();
        let {message , comment, hideReply} = this.state;
        let form = {
            name: comment.reply_by,
            message
        }
        axios.post(`/api/comment/reply`,form)
        .then(res =>{
            if(res.data){
                const { code } = res.data; 
                hideReply = code;
                this.setState({hideReply});
                this.fetchComment()
            }
        })
    }
    componentDidMount(){ 
        this.fetchComment()
    }
    render(){ 
        const {modal, comments, modleShow, handleGetId, comment, hideReply } = this.state;
        return(
            <div className="row"> 
                <div className="col-md-12 text-right">
                    <button type="button" onClick={()=>{this.handleModal(true) }} className="btn btn-primary col-md-1">them</button>
                </div>
                <ContacttV
                    comments = {comments} deleteConfirm ={this.deleteConfirm}
                    handleDelete={this.handleDelete} handleModal = {this.handleModal}
                    handleReply = {this.handleReply}
                    modal = {modal} hideReply={hideReply}
                />
                <div className="col-md-12">
                    { modal ? 
                        <ContactAdd 
                        handleModal={this.handleModal} handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange} comment = {comment} comments={comments}/> : ''
                    } 
                </div>
                <ModalV 
                    modleShow={modleShow} handleRemove ={this.handleRemove}
                    handleGetId={handleGetId} deleteConfirm ={this.deleteConfirm}
                    handleModal = {this.handleModal}
                    modal = {modal}
                />
            </div>
        )
    }
}
export default withRouter(Comment)