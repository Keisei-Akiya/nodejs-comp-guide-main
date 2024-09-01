// POINT コールバック関数の使い方
// function print(fn) {
//   const result = fn(2);
//   console.log(result);
// }

// function fn(number = 3) {
//   return number * 2;
// }

// print(fn);

function fetchUserData(userId, callback) {
  setTimeout(() => {
    const userData = { id: userId, name: "User " + userId };
    callback(null, userData);
  }, 1000);
}

function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = ["Post 1", "Post 2", "Post 3"];
    callback(null, posts);
  }, 1500);
}

function fetchComments(postId, callback) {
  setTimeout(() => {
    const comments = ["Comment 1", "Comment 2"];
    callback(null, comments);
  }, 1000);
}

// 非同期処理の実行
fetchUserData(1, (error, user) => {
  if (error) {
    console.error("Error fetching user:", error);
    return;
  }
  console.log("User:", user);

  fetchUserPosts(user.id, (error, posts) => {
    if (error) {
      console.error("Error fetching posts:", error);
      return;
    }
    console.log("Posts:", posts);

    fetchComments(posts[0], (error, comments) => {
      if (error) {
        console.error("Error fetching comments:", error);
        return;
      }
      console.log("Comments:", comments);
    });
  });
});
