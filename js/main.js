window.onload = function(){
    const postContain = document.querySelector(".postContain");
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
                   '<div class="postImg">' +
                        '<img src="image/' + element.image +'" alt="Image of post">' +
                    '</div>' +
                    '<div class="postMain">' +
                        '<a href="#" class="postCategory">' + element.category +'</a>' +
                        '<a href="#" class="postTitle">' + element.title +'</a>' +
                        '<div class="postDescription">' + element.sortDescription +'</div>' +
                        '<div class="postInfoShare">' +
                            '<p class="postInfo">bởi <a href="#">' + element.author +'</a>, ' + element.datePost +'</p>' +
                            '<a href="#" class="postShare">Share</a>' +
                        '</div>' +
                   '</div>' +
                '</div>';
    });
    postContain.insertAdjacentHTML('beforeend', post);
}