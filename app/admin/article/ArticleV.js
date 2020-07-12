import React from 'react';
import Moment from 'moment'; 
import { URL_ROOT } from '../../config'; 

const UserV = (props)=>{
    const {
            handleChangeEditor,articles, modal, handleModal, handleEdit,
            handleGetIdArticle,deleteConfirm, showImage,fetchCategories, categories
        } = props;
        
    return(
        <div className="col-md-12">
            {
                modal ? '' :
                <div  className="col-md-12">
                    <table className="col-md-12">
                        <thead>
                            <tr> 
                                <th scope="col">title</th>
                                <th scope="col">content</th> 
                                <th scope="col">danh muc</th> 
                                <th scope="col">created-date</th> 
                                <th scope="col">update-date</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                articles && articles.length > 0 ? articles.map((item,key)=>{  
                                    return(
                                        <tr key={key}>
                                            <td>{item.title}</td> 
                                            <td><p className="des">{item.content}</p></td>  
                                            <td>{item.created_date? Moment(item.created_date).format("DD-MM-YYYY") : 'N/A'}</td> 
                                            <td>{item.created_update?Moment(item.created_update).format("DD-MM-YYYY") : 'N/A'}</td> 
                                            <td>
                                                <div className="btn-group text-right">
                                                    <button type="submit" className="btn btn-primary" onClick={()=>{handleModal(true); handleEdit(item); fetchCategories()}} ><span>edit</span></button>
                                                    <button type="button" className="btn btn-danger"onClick={()=>{deleteConfirm(true); handleGetIdArticle(item._id)}}><span>delete</span></button>
                                                    <div> 
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }) : []
                            }
                        </tbody>
                    </table> 
                </div>
            }
        </div>
    )
}
export default UserV