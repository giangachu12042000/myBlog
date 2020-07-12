
import './style.scss';
import React from 'react';
import {withRouter} from 'next/router';
import axios from '../../utils';
import AddCategoryV from './AddCategory';
import CategoryV from './CategoryV';
import ModalV from '../components/modal';
class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form:{},
            modal:false,
            categories:[],
            category:null,
            modleShow:false,
            handleGetId: null,
            showSucess: false,
            sucess: null,
            search: null,
            params:{ page: 1, size: 20 },
            upload: null,
            showImage: null
        };
        
        this.handleModal = this.handleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchArticle = this.fetchArticle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.deleteConfirm = this.deleteConfirm.bind(this);
        this.handleGetIdArticle = this.handleGetIdArticle.bind(this);
        this.opentSucces = this.opentSucces.bind(this);
        this.handleSucces = this.handleSucces.bind(this);
        this.getsearch = this.getsearch.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange(even){
        let {form} = this.state;
        const name = even.target.name;
        const value = even.target.value; 
        form[name] = value; 
        this.setState({ form });
    }
    handleUpload(e){
        let {upload} = this.state;
        upload = e.target.files[0] ; 
        this.setState({ upload });  
    }
    getsearch(even){
        let {search} = this.state;
        const value = even.target.value; 
        search = value;
        this.setState({search}); 
        this.fetchArticle()
    }
    handleSubmit(event){
        event.preventDefault();
        let formData = new FormData();
        let {form,category,upload} = this.state; 
        formData.append('file', upload || category.background ); 
        formData.append('name', form.name || category.name); 
        formData.append('des', form.des || category.description); 
        if(category._id){
            const id = category._id;
            axios.put(`/api/category/edit/${id}`,formData,{
                headers: {  'Content-Type': 'multipart/form-data' }
            })
            .then(res=>{
                let param = res.data.message;
                if(res.data){
                    this.fetchArticle();
                    this.opentSucces(param);
                    this.handleSucces(true)
                }
            })
        }else{
            axios.post('/api/category/add',formData,{
                headers: {  'Content-Type': 'multipart/form-data' }
            })
            .then(res=>{
                let param = res.data.message; 
                if(res.data){
                    this.fetchArticle();
                    this.opentSucces(param);
                    this.handleSucces(true)
                }
            })
        } 
    } 
    handleModal(param){
        let {modal} = this.state;
        modal = param;
        this.setState({modal});
    }
    //==================================>Email existed
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
    //==================================>//
    fetchArticle(){
        let {categories,params,search} = this.state; 
        try{
            axios.get('/api/category',{params:{search}})
             .then(res => { 
                let {showImage} = this.state;
                if(res.data){ 
                    categories = res.data.data || []
                    this.setState({ categories }) 
                }
             })
         }catch(err){ 
             throw err 
         }
    }
    
    handleEdit(param){
        let {category} = this.state;
        category = param;
        this.setState({category});
    }
    deleteConfirm(param){
        let {modleShow} = this.state;
        modleShow = param; 
        this.setState({modleShow});
         
    }
    handleGetIdArticle(param){
        let {handleGetId} = this.state;
        handleGetId = param;
        this.setState({handleGetId});
    }
    handleRemove(param){
        const id = param; 
        this.deleteConfirm(true); 
        try{
            axios.delete(`/api/category/delete/${id}`)
             .then(res => { 
                if(res.data){
                    this.fetchArticle();
                }
             })
         }catch(err){ 
             throw err 
         }
    }
    componentDidMount(){
        this.fetchArticle();
    }
    render(){
        const {categories, modal, category, modleShow, handleGetId,sucess,showSucess ,upload, showImage} = this.state; 
        return(
            <div className="row"> 
                <div className="col-md-12 text-right">
                    <button type="button" onClick={()=>{this.handleModal(true);this.handleEdit(false)}} className="btn btn-primary col-md-1">them</button>
                </div>
                { 
                    modal ? '' :
                    <div className="col-md-12 box-form"> 
                        <form >
                            <div className="form-row">
                                <div className="col-7">
                                    <input type="text"  className="form-control" placeholder="nhập từ cần tìm kiếm" onChange={this.getsearch} />
                                </div> 
                            </div>
                        </form>  
                    </div>
                }
                <CategoryV 
                    modal={modal} categories={categories}
                    handleModal={this.handleModal} deleteConfirm={this.deleteConfirm} handleEdit={this.handleEdit}
                    handleGetIdArticle={this.handleGetIdArticle} 
                    showImage ={showImage}
                />
                 
                <ModalV
                    modleShow={modleShow} handleGetId={handleGetId} sucess={sucess} showSucess={showSucess} 
                    deleteConfirm={this.deleteConfirm} handleRemove ={this.handleRemove} handleSucces={this.handleSucces}
                />
                <div className="col-md-12">
                    {
                        modal && <AddCategoryV
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleModal={this.handleModal}
                            fetchArticle = {this.fetchArticle}
                            category = {category}
                            upload ={upload}
                        
                            handleUpload ={this.handleUpload}
                        />
                    } 
                </div>
            </div>
        )
    }
} 
export default withRouter(Category)