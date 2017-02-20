function postComment() {
  var commenter = document.getElementById('commenterName').value;
  var comment = document.getElementById('commenterText').value;
  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
  var comments = document.getElementById('comments');
  var commentHTML = commentTemplateFn({ 'comment': comment, 'commenter': commenter });
  comments += commentHTML;
}

function createPost() {
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var mainPage = document.getElementsByTagName('main');
  mainPage += pageTemplate;
  var postTitle = document.getElementById('postTitle').value;
  var author = document.getElementById('postAuthor').value;
  var postBody = document.getElementById('postBody').value;
  var postTemplate = document.getElementById('post-template').innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var postSection = document.getElementById('post');
  var postHTML = postTemplateFn({ 'title': postTitle, 'postBodyTemp': postBody, 'authorTemp': author })
  postSection += postHTML;
}
