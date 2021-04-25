const randomReviewBtn = document.querySelector('.random-review');
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

const reviews = [
    {
        image: "img/perfil1.jpeg",
        name: "Brenda Tomaz",
        profession: "Designer",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut finibus sapien. In vel magna pellentesque, pulvinar nunc ut, dignissim neque. Nam lacinia justo maximus tortor tempor, vitae suscipit sem placerat. Praesent at nunc et elit dictum tempor. Suspendisse congue magna pretium, semper elit sed, faucibus odio. Vestibulum accumsan mollis lacus, in ornare odio scelerisque id."
    },
    {
        image: "img/perfil2.jpg",
        name: "Luskas Ferreira",
        profession: "Front-end Developer",
        review: "Etiam convallis ipsum id ex hendrerit, a auctor lacus pulvinar. Morbi id risus eget elit euismod euismod tempus in velit. Pellentesque sollicitudin quam eu ipsum tempor ullamcorper. Nulla semper molestie velit, ut ultricies mauris maximus vitae. Pellentesque scelerisque viverra mi, vel dictum justo dictum eu. Sed laoreet eros arcu. Vivamus mauris felis, finibus et eros et, sollicitudin condimentum orci."
    },
    {
        image: "img/perfil3.jpg",
        name: "Kristian Lima",
        profession: "Gaymer",
        review: "Mauris eu nibh quis quam dignissim malesuada ut id augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam condimentum vitae eros in mattis. Vestibulum lobortis facilisis magna ut vestibulum. Etiam ac libero luctus est tempus dictum et vel tortor. Sed auctor tempor sagittis. Pellentesque tempus malesuada erat, mollis luctus augue."
    },
    {
        image: "img/perfil4.jpg",
        name: "Kristofer",
        profession: "PHP dev",
        review: "Nullam at efficitur mi, nec accumsan nisl. Integer leo metus, pretium sit amet leo et, mattis posuere leo. Pellentesque tempor vestibulum pharetra. Donec nibh quam, suscipit et metus vitae, lacinia vulputate dui. Vivamus non nisi elit."
    },
    {
        image: "img/perfil5.png",
        name: "Aline",
        profession: "Manicure",
        review: "Curabitur id neque neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nulla sem, consectetur ut ipsum in, commodo viverra metus. Donec nulla justo, porta in eleifend ut, congue et tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce pharetra urna eget ipsum congue, at suscipit mauris auctor."
    }
];
let reviewIndex = 0
const totalReviews = reviews.length - 1

prevBtn.addEventListener('click', ()=>{
    reviewIndex === 0 ? reviewIndex = totalReviews : reviewIndex--

    randomReview()
})

nextBtn.addEventListener('click', ()=>{
    reviewIndex === totalReviews ? reviewIndex = 0 : reviewIndex++

    randomReview()
})


randomReviewBtn.addEventListener('click', loadRandomReview)

function loadRandomReview(){
    reviewIndex = Math.floor(Math.random() * reviews.length)

    randomReview()
}

function randomReview(){
    const perfilImg = document.querySelector('.perfil-img img');
    const peopleName = document.querySelector('.people-name');
    const peopleProfession = document.querySelector('.people-profession');
    const reviewDescription = document.querySelector('.review');

    perfilImg.src = reviews[reviewIndex].image;
    peopleName.innerText = reviews[reviewIndex].name;
    peopleProfession.innerText = reviews[reviewIndex].profession;
    reviewDescription.innerText = reviews[reviewIndex].review;
}



window.onload = function(){
    loadRandomReview()
}
