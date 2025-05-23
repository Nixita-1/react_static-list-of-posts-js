import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(
        comment =>
          comment && <CommentInfo key={comment.id} comment={comment} />,
      )}
    </div>
  );
};
