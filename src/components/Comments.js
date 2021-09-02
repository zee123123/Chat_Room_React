import Card from "./Card/Card";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const Comments = () => {
  return (
    <div className="ui container comments">
      <Card>
        <h3>Warning!</h3>
        <p>Are you sure?</p>
      </Card>
      <Card>
        <CommentDetail
          name="Jack"
          date="Today at 3:29PM"
          text="Hello, can we hang out?"
          src={faker.image.image()}
        ></CommentDetail>
      </Card>

      <Card>
        <CommentDetail
          name="Jackson"
          date="Today at 3:30PM"
          text="Sure! I am right free!"
          src={faker.image.image()}
        ></CommentDetail>
      </Card>

      <Card>
        <CommentDetail
          name="Zee"
          date="Today at 3:32PM"
          text="Where are we doing?"
          src={faker.image.image()}
        ></CommentDetail>
      </Card>
    </div>
  );
};

export default Comments;
