import React from 'react';
import Moment from 'moment';

const UserV = (props)=>{
    const {users, modal, handleModal, handleEdit, handleGetIdUser,deleteConfirm} = props;
    return(
        <div className="col-md-12">
            {
                modal ? '' :
                <div  className="col-md-12">
                    <table className="col-md-12">
                        <thead>
                            <tr> 
                                <th scope="col">user</th>
                                <th scope="col">email</th> 
                                <th scope="col">created-date</th> 
                                <th scope="col">update-date</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.length > 0 ? users.map((item,key)=>{  
                                return( 
                                    <tr key={key}>
                                        <td>{item.name}</td> 
                                        <td>{item.email}</td> 
                                        <td>{item.created_date? Moment(item.created_date).format("DD-MM-YYYY") : 'N/A'}</td> 
                                        <td>{item.created_update?Moment(item.created_update).format("DD-MM-YYYY") : 'N/A'}</td> 
                                        <td>
                                            <div className="btn-group text-right">
                                                <button type="submit" className="btn btn-primary" onClick={()=>{handleModal(true);handleEdit(item)}} ><span>edit</span></button>
                                                <button type="button" className="btn btn-danger"onClick={()=>{deleteConfirm(true); handleGetIdUser(item)}}><span>delete</span></button>
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