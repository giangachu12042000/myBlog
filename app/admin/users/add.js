 
import React from 'react'

export default class AddUser extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {initialValue:this.props.user}; 
    }

    render(){
        const {handleSubmit,handleChange,handleModal,user} = this.props; 
        let {initialValue} = this.state;
        return(
            <div className="col-md-12">
                <form  method='post' encType="multipart/form-data" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label  >User name</label>
                        <input name="name" className="form-control" onChange={handleChange} defaultValue={initialValue.name}  /> 
                    </div>
                    <div className="form-group">
                        <label  >Email </label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} defaultValue={initialValue.email}/> 
                    </div>
                    <div className="form-group">
                        <label  >Password </label>
                        <input name="password" type="text" onChange={handleChange} className="form-control" /> 
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" onClick={()=>setTimeout(()=>{handleModal(false)},600 )}>Luu va dong</button>
                        <button type="button" onClick={()=>handleModal(false)}  className="btn btn-secondary">cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}