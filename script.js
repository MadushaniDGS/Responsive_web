//comment section script

document.addEventListener('DOMContentLoaded', function () {
    loadComments();
  });
  
  function loadComments() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    var commentsSection = document.getElementById('comments-section');
    commentsSection.innerHTML = '';
  
    comments.forEach(function (commentText, index) {
      var commentElement = document.createElement('div');
      commentElement.textContent = commentText;
      
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        deleteComment(index);
      };
  
      commentElement.appendChild(deleteButton);
      commentsSection.appendChild(commentElement);
    });
  }
  
  function postComment() {
    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value.trim();
  
    if (commentText !== '') {
      var comments = JSON.parse(localStorage.getItem('comments')) || [];
      comments.push(commentText);
      localStorage.setItem('comments', JSON.stringify(comments));
      loadComments();
      commentInput.value = '';

      // Apply style to the latest comment
      var commentsSection = document.getElementById('comments-section');
      var latestComment = commentsSection.lastElementChild;
    } else {
      alert('Please enter a comment before posting.');
    }
  }
  
  function deleteComment(index) {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    loadComments();
  }
  
  //images script

   var MainImg = document.getElementById("MainImg");
   var smallimg = document.getElementsByClassName("small-img");

    smallimg[0].onclick = function()
        { MainImg.src = smallimg[0].src;
          }
        smallimg[1].onclick = function()
        { MainImg.src = smallimg[1].src;
                  }
          smallimg[2].onclick = function()
            { MainImg.src = smallimg[2].src;
            }
    smallimg[3].onclick = function()
        { MainImg.src = smallimg[3].src;
        }

