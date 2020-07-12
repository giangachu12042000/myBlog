
import React from 'react';
import Moment from 'moment';
// import Image from '../../../components/img';
import { URL_ROOT } from '../../config';

const UserV = (props)=>{
    const { modal, comments, deleteConfirm, handleDelete, handleModal,handleReply ,hideReply} = props; 
    return(
        <div className="col-md-12">
            {
                modal ? '' :
                <div  className="col-md-12">
                    <table className="col-md-12">
                        <thead>
                            <tr> 
                                <th scope="col">user-send</th>
                                <th scope="col">content</th> 
                                <th scope="col">status</th> 
                                <th scope="col">user-receive</th>
                                <th scope="col">created-date</th> 
                                <th scope="col">reply-date</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                comments && comments.length > 0 ? comments.map((item,key)=>{ 
                                    return(
                                        <tr key={key}>
                                            <td><span>{item.reply_by}</span></td>
                                            <td> <span>{item.message}</span> </td>
                                            <td><span>{item.status}</span></td>
                                            <td><span>{item.reply_for}</span></td>
                                            <td>{item.created_date? Moment(item.created_date).format("DD-MM-YYYY") : 'N/A'}</td> 
                                            <td>{item.reply_date? Moment(item.reply_date).format("DD-MM-YYYY") : 'N/A'}</td> 
                                            <td>
                                                <button type="button" className="btn btn-danger"onClick={()=>{deleteConfirm(true); handleDelete(item._id)}}>
                                                    <span>delete</span>
                                                </button>
                                            </td>
                                            {
                                              item.hide ? ''
                                                :
                                                    <td>
                                                        <button type="button" className="btn btn-primary"onClick={()=>{handleModal(true) ; handleReply(item)}}>
                                                            <span>reply</span>
                                                        </button>
                                                    </td>
                                            }
                                        </tr>  
                                    )
                                }) : null
                            }
                        </tbody>
                    </table> 
                </div>
            }
        </div>
    )
}
export default UserV