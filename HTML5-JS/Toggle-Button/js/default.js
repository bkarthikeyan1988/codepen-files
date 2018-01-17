function likeUnlike() {
  if (document.getElementById('likeUnlikeBtn').innerHTML == "Like") {
    document.getElementById('likeUnlikeBtn').className = "like-btn unliked";
    document.getElementById('likeUnlikeBtn').innerHTML = "Unlike";
  } else {
    document.getElementById('likeUnlikeBtn').className = "like-btn liked";
    document.getElementById('likeUnlikeBtn').innerHTML = "Like";
  }
}
document.getElementById('likeUnlikeBtn').onclick = likeUnlike;
