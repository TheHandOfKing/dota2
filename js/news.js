var updateBtn = document.getElementById("generateUpdates")
var az = document.getElementById("filterAZ");
var dateFilter = document.getElementById("filterDate");
$(document).ready(function(){
    $(document).ready(function(){
        $('#expand').click(function(){
        if($('#header').height() == 120){
                $('#header').stop().animate({height:"65px"})
                $('#mainUl').stop().fadeIn().css({"display":"none"})
            }else{
                $('#header').stop().animate({height:"120px"})
                $('#mainUl').stop().fadeIn().css({"display":"flex", "margin-bottom":"20px"}).children().css({"border-left":"none", "padding-left":"0px"})
            }
        });
    });
    updateBtn.addEventListener("click", updates)
    dateFilter.addEventListener("click", datesFilter)
    az.addEventListener("click", filterAZ)
    $.ajax('js/blogRight.json', {
        method: "GET",
        dataType: "json",
        success: function (blogs) {
            var blogHolder = document.getElementById("rightInfo")
            for(blog of blogs){
                blogHolder.innerHTML += `<a href="${blog.link}" target="_blank" style="background-image:url('${blog.image}')" class="infoPosts"></a>`
            }
        },
        error: function(){
    
        }});
    
        $.ajax('js/blog.json', {
            method: "GET",
            dataType: "json",
            success: function (blogs) {
                var blogHolder = document.getElementById("leftInfo")
                for(blog of blogs){
                    blogHolder.innerHTML += `<div class="post">
                        <h2 class="title">${blog.title}</h2>
                        <p class="date">${blog.date}</p>
                        <div class="imgHolder"><img src="${blog.image}"/></div>
                        <p class="blogs">${blog.words}</p>
                    </div>
        
        
                    `
                }
            }
            ,
            error: function (err) {
                console.error(err);
    }});
})
function compare(a,b) {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
  }
  
function sortAZ(blogs){
    blogs.sort(compare)
}

function filterAZ(){
    $.ajax('js/blog.json', {
        method: "GET",
        dataType: "json",
        success: function (blogs) {
            sortAZ(blogs);
            var blogsHTML = "";
            for(blog of blogs){
                blogsHTML += `
                <div class="post">
                    <h2 class="title">${blog.title}</h2>
                    <p class="date">${blog.date}</p>
                    <div class="imgHolder"><img src="${blog.image}"/></div>
                    <p class="blogs">${blog.words}</p>
                </div> `
            }
            $("#leftInfo").html(blogsHTML);
        },
        error: function (err) {
            console.error(err);
}});
}
function updates(){
    var blog = document.getElementById("generateBlog")
    blog.classList.remove("visited")
    blog.classList.add("unvisited")
    updateBtn.classList.add("visited")
    updateBtn.classList.remove("unvisited")
    dateFilter.classList.add("disabled")
    dateFilter.removeEventListener("click", datesFilter)
    az.classList.add("disabled");
    az.removeEventListener("click",filterAZ)
    $.ajax('js/updates.json', {
        method: "GET",
        dataType: "json",
        success: function (updates) {
            blogsHTML = ""
            for(update of updates){
                blogsHTML += `<div class="post">
                    <h2 class="title">${update.title}</h2>
                    <p class="date">${update.date}</p>
                    <div class="imgHolder"><p class="patch">${update.patch}</p></div>
                    <p class="blogs">${update.data}</p>
                </div>
    
    
                `
            }
            $("#leftInfo").html(blogsHTML);
        }
        ,
        error: function (err) {
            console.error(err);
}});
}

function compareDate(a, b){
    if(a.date > b.date){
        return -1
    } else if (b.date > a.date){
        return 1
    }else{
        return 0
    }
}
function sortDate(blogs){
    blogs.sort(compareDate)
}
function datesFilter(){
    $.ajax('js/blog.json', {
        method: "GET",
        dataType: "json",
        success: function (blogs) {
            sortDate(blogs);
            console.log(dateGet)
            var blogsHTML = "";
            for(blog of blogs){
                var dateGet = new Date(blogs.date)
                blogsHTML += `
                <div class="post">
                    <h2 class="title">${blog.title}</h2>
                    <p class="date">${blog.date}</p>
                    <div class="imgHolder"><img src="${blog.image}"/></div>
                    <p class="blogs">${blog.words}</p>
                </div> `
            }
            $("#leftInfo").html(blogsHTML);
        },
        error: function (err) {
            console.error(err);
}});
}