import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import AprovedBtn from '../common/AprovedBtn';
import ImageLogo from '../../assets/image.png';

import { Container, ContainerFeed, ProductAdd, ImgImport, InputTitleAddPost, InputTxtAreaAddPost, BtnDiv, BtnDiscart, BtnAdd, NewItemContainer, Feed, ImgPost, TextPostContainer, FileInput, FeedContainer } from './styles'

export default function Posts() {

    const [showContainerAddPost, setShowContainerAddPost] = useState(false);

    const [posts, setPosts] = useState<any>(
        [
            {
                id: 0,
                photo: "https://avatars.githubusercontent.com/u/105875989?s=400&u=a83bd113261d3dbe705c7bccc24f1eb4d40e1c4d&v=4",
                name: "Luan Nunes",
                description: "Instituição de renome, uma instituição pra se orgulhar de ser brasileiro. Vale a pena conhecer seus projetos e as pessoas que os correram."
            }
        ]
    )

    function handleImportPhoto() {
        const action = document.getElementById('fileInput') as HTMLInputElement;
        action.click();
    }

    function handleAddPost() {

        let Newpost: object = {}
        const $inputName = document.getElementById('inputNamePost') as HTMLInputElement;
        const $inpuTextArea: any = document.getElementById('inpuTextArea') as HTMLInputElement;
        const $photo: any = document.getElementById('importPhoto') as HTMLInputElement;
        
        if (!$inputName.value || !$inpuTextArea.value) {
            console.log($inputName)
            toast.warn("Preencha todos os campos por gentileza!")
            return
        }

        if (!posts[0]) { // verifica se tem algum post no array e adiciona o indice 0 caso não tenha
            Newpost = {
                id: 0,
                photo: $photo.src,
                name: $inputName.value,
                description: $inpuTextArea.value,
            }
        } else {
            Newpost = {
                id: posts[0].id + 1,
                photo: $photo.src,
                name: $inputName.value,
                description: $inpuTextArea.value,
            }
        }

        setPosts((posts: object[]) => [Newpost, ...posts]);

        $photo.src = ImageLogo;
        $inputName.value = '';
        $inpuTextArea.value = '';

        toast.success('Post feito com sucesso!');
        setShowContainerAddPost(false);
    }

    function handleDiscartPost() {

        let $inputName = document.getElementById('inputNamePost') as HTMLInputElement;
        let $inpuTextArea = document.getElementById('inpuTextArea') as HTMLInputElement;
        let $photo = document.getElementById('importPhoto') as HTMLInputElement;

        if (!$inputName.value && !$inpuTextArea.value && $photo.src === ImageLogo) {
            toast.warn("Os campos já estão vazios!")
            return
        }

        $photo.src = ImageLogo;
        $inputName.value = '';
        $inpuTextArea.value = '';

        toast.success('Post descartado com sucesso!')
    }

    function handleShowContainerAddPost() {
        setShowContainerAddPost(true);
    }

    function handleRemovePost(id: number) {
        let filterPosts: [] = posts.filter((post: any) => {
            return (post.id !== id);
        })
        setPosts(filterPosts);
        toast.success("Post excluido com sucesso!")
    }

    function handleImgImportAction() {
        const photo: any = document.getElementById('importPhoto');
        const reader = new FileReader();
        const file: any = document.getElementById('fileInput');

        if (file.files.length <= 0) {
            return;
        }

        reader.onload = () => {
            photo.src = reader.result;
        }

        reader.readAsDataURL(file.files[0]);
    }

    return (
        <Container className='container-fluid row gx-0 mt-5 pt-5 px-0'>
            <div className='text-center container' style={showContainerAddPost? {display: 'none'} : {display: 'block'} }>
                <h5 className='mb-4'>Caso você queira, você pode adicionar algum comentário a página</h5>
                <AprovedBtn text='Adicionar' action={handleShowContainerAddPost} />
            </div>
            <ContainerFeed className='feed col col-lg-4' >
                <ProductAdd className='container' style={showContainerAddPost? {display: 'flex'} : {display: 'none'}}>
                    <ImgImport src={ImageLogo} id='importPhoto' alt='imageLogo' onClick={handleImportPhoto} />
                    <FileInput id='fileInput' onChange={handleImgImportAction} type='file' accept="image/*" />
                    <InputTitleAddPost maxLength={120} type='text' id='inputNamePost' placeholder='Digite o seu nome' />
                    <textarea maxLength={120} id='inpuTextArea' placeholder='Mensagem'></textarea>
                    <BtnDiv className='btns'>
                        <BtnDiscart onClick={handleDiscartPost}>Descartar</BtnDiscart>
                        <BtnAdd onClick={handleAddPost}>Publicar</BtnAdd>
                    </BtnDiv>
                </ProductAdd>

                <FeedContainer className='container'>
                    <p className='mt-5 feedTitle'>Comentários</p>
                    <div className='row mt-5'>
                        {posts.map((item: any) => {
                            return (
                                <NewItemContainer data-aos="fade-right" data-aos-duration="1500" key={item.id} className='row mt-3'>
                                    <div className='btnDiv'>
                                        <button onClick={() => handleRemovePost(item.id)}>X</button>
                                    </div>
                                    <Feed>
                                        <ImgPost src={item.photo} alt={item.name} />
                                        <TextPostContainer className='text'>
                                            <h6>{item.description}</h6>
                                            <p className='sendFor'>Enviado por</p>
                                            <p className='nameUser'>{item.name}</p>
                                        </TextPostContainer>
                                    </Feed>
                                </NewItemContainer>
                            )
                        })}
                    </div>
                </FeedContainer>
            </ContainerFeed>
        </Container>
    )
}