
import './style.scss';
import React, {useState, useEffect} from 'react';
import {withRouter} from 'next/router';
import { EditorState,convertToRaw } from 'draft-js';
import axios from '../../utils';
import AddArticleV from './addArticle';
import ArticleV from './ArticleV';
import ModalV from '../components/modal'; 
const Article = () => {
    const [state, setState] = useState({
        form:{},
        modal:false,
        articles:[],
        article:null,
        handleGetId: null,
        modleShow:false,
        showSucess: false,
        sucess: null,
        categories: [],
        search: null,
        params:{ page: 1, size: 20 },
        upload: null,
        showImage: null,
        editorStateView: null
    });
    useEffect(() =>{
        function fetchArticle(){
            try{
                axios.get('/api/article',{params:{search}})
                 .then(res => {
                    let {showImage} = state;
                    if(res.data){
                        articles = res.data.data.results || []
                        setState({ articles });
                        fetchCategories();
                    }
                 })
            }catch(err){
                throw err
            }
        }
        fetchArticle()
    }, []);
    useEffect(() =>{
        function fetchCategories(){
            try{
                axios.get('/api/category')
                 .then(res => { 
                    if(res.data){
                        let {categories} = state;
                        const {data} = res.data;
                        categories = data;
                        setState({categories}); 
                    }
                 })
             }catch(err){ 
                 throw err 
             }
        }
        fetchCategories()
    }, []);
     //==================================>//

    const handleChange = even =>{
        const {form} = state;
        const name = even.target.name;
        const value = even.target.value;
        form[name] = value;
        setState({ form });
    }
    const handleChangeEditor = value =>{
        setState({editorStateView:value}); 0
    }
    const handleUpload = (e) =>{
        const {upload} = state;
        upload = e.target.files[0] ; 
        setState({ upload });
    }
    const getsearch = (even) => {
        const {search} = state;
        const value = even.target.value; 
        search = value;
        setState({search}); 
        fetchArticle()
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        let formData = new FormData();
        const {form,article,upload,editor,editorStateView} = state;
        formData.append('file', upload || article.background);
        formData.append('title', form.title ||article.title);
        formData.append('content', editorStateView || article.content);
        formData.append('type', form.option || article.category  );
        formData.append('high', form.high || false);
        if(article._id){
            const id = article._id;
            axios.put(`/api/article/edit/${id}`,formData,{
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(res=>{
                let param = res.data.message;
                if(res.data){
                    fetchArticle();
                    opentSucces(param);
                    handleSucces(true)
                }
            })
        }else{
            axios.post('/api/article/add',formData,{
                headers: {  'Content-Type': 'multipart/form-data' }
            })
            .then(res=>{
                let param = res.data.message;
                if(res.data){
                    fetchArticle();
                    opentSucces(param);
                    handleSucces(true)
                }
            })
        }
    }
    const handleModal = (param) => {
        setState({modal: param});
    }
    //==================================>Email existed
    const opentSucces = (param) => {
        setState({sucess: param}); 
    }
    const handleSucces = (param) =>{
        setState({showSucess: param}); 
        let close = false;
        setTimeout(()=>{
            showSucess = close;
            setState({showSucess}); 
        },2500)
    }
    
    const handleEdit = (param) => {
        setState({article: param});
    }
    const deleteConfirm = (param)  => {
        setState({modleShow: param});
    }
    const handleGetIdArticle = (param)  => {
        setState({handleGetId: param});
    }
    const handleRemove = (id) => {
        deleteConfirm(true);
        try{
            axios.delete(`/api/article/delete/${id}`)
             .then(res => { 
                if(res.data){
                    fetchArticle();
                }
             })
        }catch(err){
            throw err
        }
    }
    const {
        editorStateView,
        categories,
        articles, 
        modal,
         article, 
         modleShow, 
         handleGetId,
         sucess,showSucess ,upload, showImage,fetchCategories} = state; 
    return(
        <div className="row">
            <div className="col-md-12 text-right">
                <button type="button" onClick={()=>{handleModal(true);handleEdit(false)}} className="btn btn-primary col-md-1">them</button>
            </div>
            { 
                modal ? '' :
                    <div className="col-md-12 box-form"> 
                        <form >
                            <div className="form-row">
                                <div className="col-7">
                                    <input type="text"  className="form-control" placeholder="nhập từ cần tìm kiếm" onChange={getsearch} />
                                </div> 
                            </div>
                        </form>
                    </div>
            }
            <ArticleV
                modal={modal} articles={articles}
                handleModal={handleModal} deleteConfirm={deleteConfirm} handleEdit={handleEdit}
                handleGetIdArticle={handleGetIdArticle} 
                showImage ={showImage}
                fetchCategories = {fetchCategories}
                categories = {categories}
            />
            <ModalV
                modleShow={modleShow} handleGetId={handleGetId} sucess={sucess} showSucess={showSucess} 
                deleteConfirm={deleteConfirm} handleRemove ={handleRemove} handleSucces={handleSucces}
            />
            <div className="col-md-12">
                {
                    modal && <AddArticleV
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleModal={handleModal}
                        fetchArticle = {fetchArticle}
                        article = {article}
                        upload ={upload}
                        handleUpload ={handleUpload}
                        categories = {categories}
                        handleChangeEditor = {handleChangeEditor}
                        editorStateView={editorStateView}
                    />
                }
            </div>
        </div>
    )
} 
export default withRouter(Article)