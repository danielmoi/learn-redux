import React from 'react';

const Comments = React.createClass({
  _renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{ comment.user }</strong> { comment.text }
            <button className="remove-comment">&times;</button>
        </p>
      </div>
    )


  },
  _handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  render() {
    return (
      <div className="comments">
        { this.props.postComments.map( this._renderComment ) }
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={ this._handleSubmit }>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
});

export default Comments;
