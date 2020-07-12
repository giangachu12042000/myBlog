
import React from 'react';
import {withRouter} from 'next/router';
import axios from '../../utils';
import Auth from '../../localStorege';
import ModalV from '../components/modal';
class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {form:{},sucess:null ,showSucess:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.opentSuccess = this.opentSuccess.bind(this);
        this.handleSucces = this.handleSucces.bind(this); 
    }
    handleChange(event){
        let {form} = this.state;
        const value = event.target.value;
        const name = event.target.name;
        form[name] = value; 
        this.setState({form}); 
    } 
    handleSucces(param){
        let {showSucess} = this.state;
        showSucess = param;
        this.setState({showSucess}); 
        let close = false;
        setTimeout(()=>{
            showSucess = close;
            this.setState({showSucess});
        },4000);
    } 
    opentSuccess(param){
        let {sucess} = this.state;
        sucess = param;
        this.setState({sucess}); 
    }
    handleSubmit(event){
        event.preventDefault();
        const {form} = this.state;
        try{  
            axios.post("/api/login",form)
            .then(res=>{
                if(res.data){
                    const token = res.data ;
                    if(token.code == 1){
                        Auth.authenticateUser(token.data) ;
                        this.opentSuccess(token.message);
                        this.handleSucces(true);
                    }else{ 
                        this.opentSuccess(token.message);
                        this.handleSucces(true);
                    }
                }
            }) 
        }catch(err){
            throw err
        }
    } 
    render(){ 
        const {sucess ,showSucess} = this.state;
        return(
            <div className="row">
                <div className="col-md-6"> 
                    <ModalV   showSucess={showSucess} handleSucces={this.handleSucces} sucess={sucess} />
                 <form  method='post' encType="multipart/form-data" onSubmit={this.handleSubmit} > 
                    <div className="form-group">
                        <label  >Email </label>
                        <input type="email" name="email" className="form-control" onChange={this.handleChange}  /> 
                    </div>
                    <div className="form-group">
                        <label  >Password </label>
                        <input name="password" type="text" onChange={this.handleChange} className="form-control"   /> 
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary">Đăng nhập</button> 
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
export default withRouter(LoginPage);