window.onload = function(){
    const postContain = document.querySelector(".post-contain");
    var data = [
        {
            image: "post_1.png",
            category: "Chuyện của tôi",
            title: "Click this card for redirect to full story",
            sortDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            author: "Pikachu",
            datePost: "07/07/2011"
        },
        {
            image: "post_2.png",
            category: "Chuyện của tôi",
            title: "Click this card for redirect to full story",
            sortDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            author: "Pikachu",
            datePost: "07/07/2011"
        },
        {
            image: "post_1.png",
            category: "Chuyện của tôi",
            title: "Click this card for redirect to full story",
            sortDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            author: "Pikachu",
            datePost: "07/07/2011"
        },
        {
            image: "post_2.png",
            category: "Chuyện của tôi",
            title: "Click this card for redirect to full story",
            sortDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            author: "Pikachu",
            datePost: "07/07/2011"
        },
    ];
    var post = "";

    data.forEach(element => {
        post += '<div class="post">' +
                   '<div class="post-img">' +
                        '<img src="image/' + element.image +'" alt="Image of post">' +
                    '</div>' +
                    '<div class="post-main">' +
                        '<a href="#" class="post-category">' + element.category +'</a>' +
                        '<a href="#" class="post-title">' + element.title +'</a>' +
                        '<div class="post-description">' + element.sortDescription +'</div>' +
                        '<div class="post-info-share">' +
                            '<p class="post-info">bởi <a href="#">' + element.author +'</a>, ' + element.datePost +'</p>' +
                            '<a href="#" class="post-share">Share</a>' +
                        '</div>' +
                   '</div>' +
                '</div>';
    });
    postContain.insertAdjacentHTML('beforeend', post);
}