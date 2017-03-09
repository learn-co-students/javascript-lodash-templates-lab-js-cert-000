function createPost() {
	//erzeugt  das Page-Template
	var pageTemplate = document.getElementById("page-template").innerHTML;

	//erzeugt einen Post-Template-String und daraus dann gleich die Funktion zu dem Template

	var postTemplate = _.template(document.getElementById("post-template").innerHTML);

	//erzeugt einen Comments-Template-String und daraus dann gleich die Funktion zu dem Template
	var commentsTemplate = document.getElementById("comments-template").innerHTML;




	 //nimmt alle Inhalte der Input-Boxen - das muss zuerst geschehen, sonst werden die Inhalt wieder gelöscht wenn man die pageDivs hinzufügt
	var header = document.getElementById("postTitle").value;
	var post = document.getElementById("postBody").value;
	var author = document.getElementById("postAuthor").value;

	//Erzeugt das Template mit dem Inhalt aus den Input-Feldern
	var postTemplate = postTemplate({ 'header': header, 'post': post, 'author': author });





	//erzeugt eine Variable zum DOM-Element main
    var pageDiv =  document.querySelector('main')

	 // fügt das HTML-Template zu dem DOM-Element
	pageDiv.innerHTML = pageTemplate;



  	//erzeugt eine Variable zum DOM-Element mit der id="post"
	var postsDiv =  document.getElementById("post")


    //fügt das Post-Template zum DOM DIV post
	postsDiv.innerHTML = postTemplate;


  	//erzeugt eine Variable zum DOM-Element mit der id="sidebar"
	var commentsDiv =  document.getElementById("sidebar")


  // fügt das Comments-Template zu dem DOM-Element sidebar
	commentsDiv.innerHTML += commentsTemplate;



  }







  //index functions createPost builds the proper templates:
    // Error: spy was never called with [ '\n      <div id="sidebar"></div>\n       <div id="post"></div>\n     ' ]



function postComment() {
 //create template string
   var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  //create template function

  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>



  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var commentTemplate = commentTemplate({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += commentTemplate;
}
