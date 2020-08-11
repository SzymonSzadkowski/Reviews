var review_list = [
    {
        id: 0,
        name: "Lara Crofty",
        job: "Web Designer",
        img: "images/pic1.jpg",
        text: "Nam cursus, neque id viverra laoreet, dui turpis viverra turpis, non rhoncus risus augue quis ante. Fusce ut nulla vehicula, viverra enim non, molestie erat. Aenean turpis tellus, rutrum sed facilisis ac, lacinia ac quam. Donec ornare eu ligula eget porttitor.Sed laoreet turpis eget consequat tempor. Sed eu posuere lacus. Nam cursus, neque id viverra laoreet, dui turpis viverra turpis, non rhoncus risus augue quis ante. Fusce ut nulla vehicula, viverra enim non, molestie erat. Aenean turpis tellus, rutrum sed facilisis ac, lacinia ac quam. "
    },
    {
        id: 1,
        name: "Tomass Cooker",
        job: "CEO",
        img: "images/pic2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere, massa faucibus blandit imperdiet, enim elit eleifend justo, vel efficitur neque risus a purus. Vivamus vitae leo et lectus tempor commodo non in erat. Sed sollicitudin interdum ligula at efficitur. Sed laoreet turpis eget consequat tempor. Sed eu posuere lacus. Nam cursus, neque id viverra laoreet, dui turpis viverra turpis, non rhoncus risus augue quis ante. Fusce ut nulla vehicula, viverra enim non, molestie erat. Aenean turpis tellus, rutrum sed facilisis ac, lacinia ac quam. Donec ornare eu ligula eget porttitor. "
    },
    {
        id: 2,
        name: "Lara Anderson",
        job: "UX Designer",
        img: "images/pic3.jpg",
        text: "Sed laoreet turpis eget consequat tempor. Sed eu posuere lacus. Nam cursus, neque id viverra laoreet, dui turpis viverra turpis, non rhoncus risus augue quis ante. Fusce ut nulla vehicula, viverra enim non, molestie erat. Aenean turpis tellus, rutrum sed facilisis ac, lacinia ac quam. Donec ornare eu ligula eget porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere, massa faucibus blandit imperdiet, enim elit eleifend justo, vel efficitur neque risus a purus. Vivamus vitae leo et lectus tempor commodo non in erat. Sed sollicitudin interdum ligula at efficitur. "
    },
    {
        id: 3,
        name: "Katy La'rouche",
        job: "Web Designer",
        img: "images/pic4.jpg",
        text: "Maecenas quis faucibus enim. Aliquam volutpat placerat turpis at blandit. Nullam in neque ac nibh cursus fringilla. Proin ornare ornare accumsan. Nulla rhoncus sagittis erat, dapibus finibus erat fringilla quis. Nam pharetra posuere dui ac ullamcorper. In hac habitasse platea dictumst. Curabitur maximus, urna id vehicula mattis, tortor sem mattis urna, sit amet ullamcorper urna justo at est. Donec venenatis consequat lectus, ac cursus odio accumsan ac. Integer semper pretium dui, ac ullamcorper est tincidunt non. Sed consectetur massa quis orci vehicula, non consequat sapien malesuada."
    },
    {
        id: 4,
        name: "Teresa Baumer",
        job: "Project Manager",
        img: "images/pic5.jpg",
        text: "Quisque eget porta lorem. Fusce id iaculis felis. Aliquam elementum nisl suscipit, varius massa vel, laoreet nisi. Mauris ut elit tellus. Maecenas ut sodales quam. Integer finibus diam sed nibh semper rutrum. Duis ut augue ac lacus vulputate maximus ut et purus. Aenean vestibulum tincidunt mattis. Fusce vitae finibus odio. Sed lobortis sem in sagittis consequat. Nunc iaculis ipsum purus, ac tempor quam blandit sit amet. Vestibulum est orci, dictum in semper in, pretium a nunc. Praesent massa mauris, interdum eget viverra eu, viverra sed felis. Sed mattis libero non turpis ornare, mollis venenatis neque rhoncus."
    }
]


// select buttons
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");
const random_btn = document.querySelector(".random-btn");

// select img, name, job and text of review
const img = document.getElementById("rev-img")
const name = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");

// set starting review id
let currentReviewId = 0;

// function to change reviews
function changeReview(review_id){
    const review = review_list[review_id];
    img.src = review.img;
    name.textContent = review.name;
    job.textContent = review.job;
    text.textContent = review.text;
}

// load initial review
window.addEventListener("DOMContentLoaded", function() {
    changeReview(currentReviewId);
})

// setting buttons action
next_btn.addEventListener('click', function() {
    currentReviewId++;
    if (currentReviewId > review_list.length -1){
        currentReviewId = 0;
    }
    changeReview(currentReviewId);
})

prev_btn.addEventListener('click', function() {
    currentReviewId--;
    if (currentReviewId < 0 ){
        currentReviewId = review_list.length - 1;
    }
    changeReview(currentReviewId);
})

random_btn.addEventListener('click', function() {
    let checker = currentReviewId;
    currentReviewId = Math.floor(Math.random() * review_list.length);
    // preventing random number from being the same as the last one
    if (checker === currentReviewId){
        currentReviewId = checker - 1;
    }
    try {
        changeReview(currentReviewId);  
    } catch (error) {
        currentReviewId = checker + 1;
        changeReview(currentReviewId);
    }
})

