 
import React from 'react'

export default class AddUser extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {initialValue:this.props.category}; 
    }

    render(){
        const {handleSubmit,handleChange,handleModal,handleUpload, upload, showImage} = this.props; 
        let {initialValue} = this.state; 
        const options = [
            {  key: 1,  value: '' },
            {  key: 2, text: 'new-one', value: '1' },
            {  key: 3, text: 'new-two', value: '2' }
        ]
        return(
            <div className="col-md-12">
                <form  method='post' encType="multipart/form-data" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label  >name</label>
                        <input name="name" className="form-control" onChange={handleChange} defaultValue={initialValue.name}  /> 
                    </div> 
                    <div className="form-group">
                        <label >description:</label>
                        <textarea name="des" defaultValue={initialValue.description} className="form-control" rows="5"  onChange={handleChange}>
                        </textarea>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input"  onChange={handleUpload} />
                        <label className="custom-file-label" >choose background</label>
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