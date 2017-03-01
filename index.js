var i=0


function createPost() {
  var header = document.getElementById("HeaderText").value;
  var post = document.getElementById("PostText").value;
  var author = document.getElementById("AuthorName").value;
  //nimmt alle Inhalte der Input-Boxen

  //erzeugt einen Template-String
   var postTemplate = document.getElementById("post-template").innerHTML;
  //erzeugt die Funktion zu dem Template
  var templateFn = _.template(postTemplate);
	//erzeugt eine Variable zum DOM-Element mit der id="post"
  var postsDiv = document.getElementById("post");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'header': header, 'post': post, 'author': author });

  //append rather than replace!
  postsDiv.innerHTML += templateHTML;

  }

function postComment(i) {


  var commenter = document.getElementById("commenterName"+i).value;
  var comment = document.getElementById("commentText"+i).value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string
   var commentTemplate = document.getElementById("comments-template").innerHTML;
  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById(i);

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
