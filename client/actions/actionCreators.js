// increment
// index: which post is going to have its count incremented
export function increment(index) {
  return {
    // name of action that gets dispatched
    type: 'INCREMENT_LIKES',

    // data
    // 'index' is the same as 'index: index'
    index

  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, index) {
  // postId is the post from which the comment is to be removed from
  // index is the index of the comment (in that post) to be removed
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
