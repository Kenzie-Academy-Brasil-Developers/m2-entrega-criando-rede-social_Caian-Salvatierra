import { posts } from "./database.js";

function createElementModal(element){
    const modalcontroller = document.querySelector('.modal__controller')
    modalcontroller.innerHTML = ''

    const divPost = document.createElement('div')
    const itemImg = document.createElement('img')
    const divName = document.createElement('div')
    const closeModal = document.createElement('span')
    const containerCard = document.createElement('div')
    const userName = document.createElement('h2')
    const profession = document.createElement('p')
    const title = document.createElement('h2')
    const information = document.createElement('p') 

    modalcontroller.classList.add('modal__controller')
    divPost.classList.add('modal__container')
    divName.classList.add('modal__posts')
    containerCard.classList.add('modal__names')
    itemImg.classList.add('modal__img')
    userName.classList.add('name__user')
    profession.classList.add('profession__text')
    title.classList.add('list__title')
    information.classList.add('modal__text')
   
    closeModal.classList.add('modal__close')
    closeModal.innerText = 'X'


    itemImg.src = element.img
    title.innerHTML = element.title
    information.innerHTML = element.text
    userName.innerHTML = element.user
    profession.innerHTML = element.stack

    divName.append(userName, profession,)
    containerCard.append(itemImg, divName)
    modalcontroller.appendChild(closeModal)
    modalcontroller.append(containerCard, title, information)

    console.log(itemImg, title, information, userName, profession)

}

function handleModal(){
    const button = document.querySelectorAll('.posts__button')
    const modalcontroller = document.querySelector('.modal__controller')
    

    for(let i = 0; i < button.length; i++){
        button[i].addEventListener('click' , () => {
            modalcontroller.showModal()
            
            const post = posts.find(post => post.id === Number(event.target.id))
            console.log(post)
            createElementModal(post);
            closeModal();
            
        }) 
    }

    
}

function closeModal(){
    const modalcontroller = document.querySelector('.modal__controller');
    const closeButton = document.querySelector('.modal__close');

    closeButton.addEventListener('click', () => {
        modalcontroller.close();
    })
}




handleModal();

