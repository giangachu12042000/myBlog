import React from 'react';
import Moment from 'moment';
// import Image from '../../../components/img';
import { URL_ROOT } from '../../config';

const UserV = (props)=>{
    const {categories, modal, handleModal, handleEdit, handleGetIdArticle,deleteConfirm, showImage} = props;
    return(
        <div className="col-md-12">
            {
                modal ? '' :
                <div  className="col-md-12">
                    <table className="col-md-12">
                        <thead>
                            <tr> 
                                <th scope="col">name</th> 
                                <th scope="col">created-date</th> 
                                <th scope="col">update-date</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {categories && categories.length > 0 ? categories.map((item,key)=>{  
                                return( 
                                    <tr key={key}>
                                        <td>{item.name}</td> 
                                        <td>{item.created_date? Moment(item.created_date).format("DD-MM-YYYY") : 'N/A'}</td> 
                                        <td>{item.created_update?Moment(item.created_update).format("DD-MM-YYYY") : 'N/A'}</td> 
                                        <td>
                                            <div className="btn-group text-right">
                                                <button type="submit" className="btn btn-primary" onClick={()=>{handleModal(true);handleEdit(item)}} ><span>edit</span></button>
                                                <button type="button" className="btn btn-danger"onClick={()=>{deleteConfirm(true); handleGetIdArticle(item._id)}}><span>delete</span></button>
                                                <div> 
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }) : []}
                        </tbody>
                    </table> 
                </div>
            }
        </div>
    )
}
export default UserV