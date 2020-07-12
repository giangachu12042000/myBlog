 
import React from 'react'

export default class AddUser extends React.Component{ 
     

    render(){ 
        const {handleModal, handleSubmit, handleChange, replyId,comment} = this.props;
         
        return(
            <div className="col-md-12">
                <form  method='post' encType="multipart/form-data" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label >user</label>
                        <input name='name' className="form-control" value={comment.reply_by} />
                    </div>
                    <div className="form-group">
                        <label >message</label>
                        <textarea   className="form-control" rows="5" value={comment.message} >
                      
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label >conten-reply</label>
                        <textarea name="reply" className="form-control" rows="5" onChange={handleChange} > 
                        </textarea>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" onClick={()=>setTimeout(()=>{handleModal(false)},800 )}>send</button>
                        <button type="button" onClick={()=>handleModal(false)}  className="btn btn-secondary">cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}