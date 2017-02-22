function createPost() {
  //create templates
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var postTemplate = _.template(document.getElementById('post-template').innerHTML);
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  // get blog values
  var postTitle = document.getElementById('postTitle').value;
  var author = document.getElementById('postAuthor').value;
  var postBody = document.getElementById('postBody').value;

  //append page template to main tag
  document.getElementsByTagName('main')[0].innerHTML += pageTemplate;

  //insert values from form into Lodash template + get post id to append to + create comments section
  var postHTML = postTemplate( 'title': postTitle, 'postBodyTemp': postBody, 'authorTemp': author );
  var postSection = document.getElementById('post');
  var commentHTML = commentsTemplate();

  //append post section to correct spot in DOM and do the same with the empty comments section
  postSection.innerHTML = postHTML;
  document.getElementsByClassName('posted-by').innerHTML += commentHTML;  
}

function postComment() {
  //create comment template
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  //receive values from comment form and store them in variables
  var commenter = document.getElementById('commenterName').value;
  var comment = document.getElementById('commenterText').value;

  //receive spot in DOM to place the comments
  var comments = document.getElementById('comments');

  //fill in comment values dynamically via Lodash and append to comments section on one line
  comments.innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter });
}