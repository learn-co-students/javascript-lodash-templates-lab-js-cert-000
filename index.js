function createPost() {
	//erzeugt  das Page-Template
	var pageTemplate = _.template(document.getElementById("page-template").innerHTML);

	//erzeugt einen Post-Template-String und daraus dann gleich die Funktion zu dem Template

	var postTemplate = _.template(document.getElementById("post-template").innerHTML);

	//erzeugt einen Comments-Template-String und daraus dann gleich die Funktion zu dem Template
	var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);




	 //nimmt alle Inhalte der Input-Boxen - das muss zuerst geschehen, sonst werden die Inhalt wieder gelöscht wenn man die pageDivs hinzufügt
	var header = document.getElementById("postTitle").value;
	var post = document.getElementById("postBody").value;
	var author = document.getElementById("postAuthor").value;

	//Erzeugt das Template mit dem Inhalt aus den Input-Feldern
	var postContent = postTemplate({ 'header': header, 'post': post, 'author': author });

var pageContent = pageTemplate()

var commentsContent=commentsTemplate()

	//erzeugt eine Variable zum DOM-Element main
    var pageDiv =  document.querySelector('main')

	 // fügt das HTML-Template zu dem DOM-Element
	pageDiv.innerHTML =  pageContent;



  	//erzeugt eine Variable zum DOM-Element mit der id="post"
	var postsDiv =  document.getElementById("post")


    //fügt das Post-Template zum DOM DIV post
	postsDiv.innerHTML =postContent;


  	//erzeugt eine Variable zum DOM-Element mit der id="sidebar"
	var commentsDiv =  document.getElementById("sidebar")


  // fügt das Comments-Template zu dem DOM-Element sidebar
	commentsDiv.innerHTML += commentsContent;



  }







  //index functions createPost builds the proper templates:
    // Error: spy was never called with [ '\n      <div id="sidebar"></div>\n       <div id="post"></div>\n     ' ]



function postComment() {
 //erzeugt die Kommentar-Template-Funktion
   var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

//nimmt die Werte aus den Eingabe-Feldern
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>


//Eine Variable zum DOM-Element mit der ID= comments
  var commentsDiv = document.getElementById("comments");

  //Führt die lodash-Funktion mit den Eingabe-Werten aus und erzeugt das gefüllte Template
  var commentTemplate = commentTemplate({ 'comment': comment, 'commenter': commenter });

  //fügt das vollständige neue
  commentsDiv.innerHTML += commentTemplate;
}
