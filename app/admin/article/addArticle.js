 
import React from 'react'
import FieldEditors from '../../components/field/editor';
import {URL_ROOT} from '../../config';
import './style.scss';
export default class AddArticle extends React.Component{
    constructor(props){
        super(props);
        this.state = {initialValue:this.props.article}; 
    } 
    render(){
        const {editorStateView,handleChangeEditor,handleSubmit,handleChange,handleModal,handleUpload, upload, showImage, fetchCategories, categories} = this.props; 
        let {initialValue} = this.state;  
        return(
            <div className="col-md-12">
                <form  method='post' encType="multipart/form-data" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label  >Title</label>
                        <input name="title" className="form-control" onChange={handleChange} defaultValue={initialValue.title}  /> 
                    </div>
                    <div className="form-group">
                        <label  >chon danh muc</label>
                        <select className="form-control" name="option" onChange={handleChange} >
                            <option> </option>
                            {   initialValue ? 
                                    categories && categories.length > 0 ? categories.map((item,key)=>{
                                        return(
                                            <option value={item._id} key={key} selected={initialValue.category == item._id} >
                                                {item.name}
                                            </option>
                                        )
                                    }) : ''
                                :
                                    categories && categories.length > 0 ? categories.map((item,key)=>{  
                                        return(
                                            <option value={item._id} key={key} >{item.name}</option>
                                        )
                                    }) : ''
                            }
                        </select>
                    </div>
                    <div className="form-group"> 
                    <label >Content:</label>
                        <FieldEditors handleChangeEditor={handleChangeEditor} defaultValue_editor={initialValue.content}  />
                    </div>
                     
                    {/* </textarea> */}
                    <div className="row">
                        <div className="form-group">
                            <input className="form-check-input" type="checkbox" value="true" name="high" onChange={handleChange}/>
                            <label className="form-check-label" >
                                high
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        {upload ?
                            <img src={URL_ROOT + upload.name }  /> : 
                                <img src={URL_ROOT + initialValue.background }/> } 
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input"  onChange={handleUpload} />
                        <label className="custom-file-label" >choose background</label>
                    </div>
                    {/* <div>
                        {
                            upload ? 
                                <div>
                                    <label className="text-center"> {upload.name} </label> 
                                </div>: ''
                        }
                    </div> */}
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" onClick={()=>setTimeout(()=>{handleModal(false)},600 )}>Luu va dong</button>
                        <button type="button" onClick={()=>handleModal(false)}  className="btn btn-secondary">cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}