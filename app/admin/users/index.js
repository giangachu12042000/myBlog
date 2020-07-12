
import './style.scss';
import React from 'react';
import {withRouter} from 'next/router';
// import axios from 'axios';
import AddUser from './add';
import UserV from './userV';
import ModalV from '../components/modal';
import Auth from '../../localStorege';
import axios from '../../utils';


class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {form:{},
            modal:false,
            users:[],
            user:null,
            modleShow:false,
            handleGetId : null,
            showSucess: false,
            sucess: null,
            search: null,
            params:{ page: 1, size: 20 }
        };
        
        this.handleModal = this.handleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.deleteConfirm = this.deleteConfirm.bind(this);
        this.handleGetIdUser = this.handleGetIdUser.bind(this);
        this.opentSucces = this.opentSucces.bind(this);
        this.handleSucces = this.handleSucces.bind(this);
        this.getsearch = this.getsearch.bind(this);
    }
    handleChange(even){
        let {form} = this.state;
        const name = even.target.name;
        const value = even.target.value; 
        form[name] = value;
        this.setState({ form }); 
    }
    
    getsearch(even){
        let {search} = this.state;
        const value = even.target.value; 
        search = value;
        this.setState({search}); 
        this.fetchUser()
    }
    handleSubmit(event){
        event.preventDefault();
        let {form,user} = this.state;  
        const selectForm = {
            name: form.name || user.name,
            email: form.email || user.email,
            password: form.password || user.password 
        }
        try{
            if(user._id){
                console.log(user,'=========>user')
                
                const id = user._id;
                axios.put(`/api/user/edit/${id}`,selectForm)
                .then(res=>{
                    let param = res.data.message;
                    if(res.data){
                        this.fetchUser();
                        this.opentSucces(param);
                        this.handleSucces(true)
                    }
                })
            }else{
                axios.post('/api/user/add',selectForm)
                .then(res=>{
                    let param = res.data.message;
                    if(res.data){  
                        this.fetchUser();
                        this.opentSucces(param);
                        this.handleSucces(true)
                    }
                })
            }
        }catch(err){
            throw err
        }
    } 
    handleModal(param){
        let {modal} = this.state;
        modal = param;
        this.setState({modal});
    }
    //==================================>Email existed
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
    //==================================>//
    fetchUser(){
        let {users,params,search} = this.state;
        // const {router} = this.props;
        // const params = router.query;
        // params = 
        const token = Auth.getToken();
        // console.log(token,'==========================>?tke')
        try{
            axios.get('/api/user',{params:{search}})
             .then(res => {
                if(res.data){
                    users = res.data.data
                    this.setState({ users }); 
                    return users 
                }
             })
         }catch(err){ 
             throw err 
         }
    }
    
    handleEdit(param){
        let {user} = this.state;
        user = param;
        this.setState({user});
    }
    deleteConfirm(param){
        let {modleShow} = this.state;
        modleShow = param; 
        this.setState({modleShow});
         
    }
    handleGetIdUser(param){
        let {handleGetId} = this.state;
        handleGetId = param;
        this.setState({handleGetId});
    }
    handleRemove(param){
        const id = param._id; 
        this.deleteConfirm(true); 
        try{
            axios.delete(`/api/user/delete/${id}`)
             .then(res => {
                if(res.data){
                    this.fetchUser();
                }
             })
         }catch(err){ 
             throw err 
         }
    }
    componentDidMount(){
        this.fetchUser();
    }
    render(){
        const {users, modal, user, modleShow, handleGetId,sucess,showSucess} = this.state; 
        return(
            <div className="row"> 
                <div className="col-md-12 text-right">
                    <button type="button" onClick={()=>{this.handleModal(true);this.handleEdit(false)}} className="btn btn-primary col-md-1">them</button>
                </div> 
                    <div className="col-md-12 box-form"> 
                        <form  method='post' encType="multipart/form-data" onSubmit={this.handleSubmit} >
                            <div className="form-row">
                                <div className="col-7">
                                    <input type="text"  className="form-control" placeholder="nhập từ cần tìm kiếm" onChange={this.getsearch} />
                                </div>
                            </div>
                        </form>
                    </div>
                <UserV 
                    modal={modal} users={users}
                    handleModal={this.handleModal} deleteConfirm={this.deleteConfirm} handleEdit={this.handleEdit} handleGetIdUser={this.handleGetIdUser} 
                />
                 
                <ModalV
                    modleShow={modleShow} handleGetId={handleGetId} sucess={sucess} showSucess={showSucess} 
                    deleteConfirm={this.deleteConfirm} handleRemove ={this.handleRemove} handleSucces={this.handleSucces}
                  />
                <div className="col-md-12">
                    {modal && <AddUser
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleModal={this.handleModal}
                        fetchUser = {this.fetchUser}
                        user = {user}
                    />} 
                </div>
            </div>
        )
    }
} 
export default withRouter(User)