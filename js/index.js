const features = document.querySelectorAll('.features-item');
const title = document.querySelectorAll('.article-text__title');
const imgUrl = document.querySelectorAll('.article-img');
const featureList = [{
    name: "neurology",
    title: "неврологія",
    url: "./img/image3.png"
}, {
    name: "massage",
    title: "Масаж",
    url: "./img/image2.png"
}, {
    name: "rheumatology",
    title: "ревматологія",
    url: "./img/image1.png"
}, ];
document.addEventListener("click", () => {
    if(event.target.closest("#neurology")) {
        title[0].innerHTML = featureList[0].title;
        for(let i = 0; i < imgUrl.length; i++) {
            imgUrl[i].src = featureList[0].url;
        }
    } else if(event.target.closest("#massage")) {
        title[0].innerHTML = featureList[1].title;
        for(let i = 0; i < imgUrl.length; i++) {
            imgUrl[i].src = featureList[1].url;
        }
    } else if(event.target.closest("#rheumatology")) {
        title[0].innerHTML = featureList[2].title;
        for(let i = 0; i < imgUrl.length; i++) {
            imgUrl[i].src = featureList[2].url;
        }
    }
});