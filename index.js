function createPost() {
	 //nimmt alle Inhalte der Input-Boxen - das muss zuerst geschehen, sonst werden die Inhalt wieder gelöscht wenn man die pageDivs hinzufügt
	var header = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

   //erzeugt aus dem lodash Template das HTML-Template
   var templateHTML = document.getElementById("page-template").innerHTML;


   var pageDiv =  document.getElementsByTagName("main")[0]

	 // fügt das HTML-Template zu dem DOM-Element
	pageDiv.innerHTML += templateHTML;




  //erzeugt einen Template-String und daraus dann gleich die Funktion zu dem Template
   var templateFn= _.template(document.getElementById("post-template").innerHTML);
   // page template

  	//erzeugt eine Variable zum DOM-Element mit der id="post"
	var postsDiv =  document.getElementById("post")


  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'header': header, 'post': post, 'author': author });

  //append rather than replace!
  postsDiv.innerHTML += templateHTML;


  //erzeugt einen Template-String und daraus dann gleich die Funktion zu dem Template
   var templateFn= _.template(document.getElementById("comments-template").innerHTML);


  	//erzeugt eine Variable zum DOM-Element mit der id="sidebar"
	var commentsDiv =  document.getElementById("sidebar")

	//erzeugt aus der Funktion das HTML-Template
	var templateHTML = templateFn();

  // fügt das HTML-Template zu dem DOM-Element
	commentsDiv.innerHTML += templateHTML;

  }








function postComment() {


  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string
   var commentTemplate = document.getElementById("comment-template").innerHTML;
  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("sidebar");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
