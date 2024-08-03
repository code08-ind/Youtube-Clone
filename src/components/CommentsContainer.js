import React from 'react'
import Comment from './Comment'

const commentsData = [
  {
    id: 1,
    user: "Alice",
    comment: "This is a great video!",
    timestamp: "2024-07-02T10:15:00Z",
    replies: [
      {
        id: 2,
        user: "Bob",
        comment: "I agree, very informative!",
        timestamp: "2024-07-02T11:00:00Z",
        replies: []
      },
      {
        id: 3,
        user: "Charlie",
        comment: "Thanks for sharing!",
        timestamp: "2024-07-02T11:30:00Z",
        replies: [
          {
            id: 4,
            user: "Dave",
            comment: "Indeed, very useful content.",
            timestamp: "2024-07-02T12:00:00Z",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    user: "Eve",
    comment: "Can someone explain the part about algorithms?",
    timestamp: "2024-07-02T10:45:00Z",
    replies: [
      {
        id: 6,
        user: "Frank",
        comment: "Sure, which part are you confused about?",
        timestamp: "2024-07-02T11:15:00Z",
        replies: [
          {
            id: 7,
            user: "Eve",
            comment: "The sorting algorithms part.",
            timestamp: "2024-07-02T11:45:00Z",
            replies: [
              {
                id: 8,
                user: "Grace",
                comment: "I can help with that. They explained it really well.",
                timestamp: "2024-07-02T12:15:00Z",
                replies: []
              }
            ]
          }
        ]
      }
    ]
  }
];

const CommentsList = ({ comments }) => {
  return comments.map((comment) =>
    <div key={comment.id}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        {/* n-level nesting to make sure we get replies for the comment by having recursion of calling the CommentsList component. */}
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  )
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <div className='text-2xl font-bold'>Comments: </div>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer