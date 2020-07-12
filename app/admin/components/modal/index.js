
import React from 'react'; 
import {Button, Modal} from 'react-bootstrap';

const ModalV = (props)=>{
    const { showSucess, sucess,handleGetId,modleShow,deleteConfirm,handleRemove,handleSucces} = props ;
    return(
        <div>
            { 
                handleGetId ?
                    <Modal show={modleShow} onHide ={deleteConfirm} > 
                        <Modal.Body>Are you sure!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick ={()=>deleteConfirm(false)}  >
                            Close
                        </Button>
                        <Button variant="primary" onClick ={()=>{handleRemove(handleGetId);deleteConfirm(false)}}>
                            delete
                        </Button>
                        </Modal.Footer>
                    </Modal> :''
                }
                { 
                    sucess ?
                        <Modal show={showSucess} size ="sm" onHide ={handleSucces}> 
                            <Modal.Body>{sucess}</Modal.Body> 
                        </Modal> :''
                }
        </div>
    )
}
export default ModalV