
 
import React from 'react';
import {withRouter} from 'next/router';
import axios from '../../utils'; 
import ModalV from '../../admin/components/modal'; 

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            modal:false,
            message: false,
            modleShow:false,
            showSucess: false,
            sucess: null,
        } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSucces = this.handleSucces.bind(this);
        this.opentSucces = this.opentSucces.bind(this)
    }
    handleChange(e){
        let {message} = this.state;
        message = e.target.value;
        this.setState({message});
        
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
        let {message} = this.state; 
        axios.post('/api/contact/add',{message})
        .then(res =>{ 
            // console.log(res.data,'---->data')
            this.opentSucces(res.data.message); 
            this.handleSucces(true);
        })
    }

    componentDidMount(){ 

    }
    render(){  
        const {sucess, showSucess} = this.state;
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form  method='post' encType="multipart/form-data" onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label >Content:</label>
                            <textarea name="message" placeholder="can we help you?"  className="form-control" rows="5" onChange={this.handleChange} > 
                            </textarea>
                        </div> 
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary" >submit</button> 
                        </div>
                    </form> 
                </div>
                <ModalV sucess = {sucess} handleSucces ={this.handleSucces} showSucess ={showSucess} />
            </div>
        )
    }
} 
export default withRouter(Comment)