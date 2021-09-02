// Import the React & ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (module.hot) {
  module.hot.accept();
}

// Create a react component

// Take the component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById("root")
  //It is the same as : document.querySelector('#root')
);

// {}:
// it means javascipt code, like Javascipt variable

// {/* <div className="ui container comments">
//         <Card>
//       <CommentDetail
//         name="Jack"
//         date="Today at 3:29PM"
//         text="asdad"
//         src={faker.image.image()}
//       ></CommentDetail>
//       <CommentDetail
//         name="Jackson"
//         date="Today at 3:30PM"
//         text="asdasdqwdqq"
//         src={faker.image.image()}
//       ></CommentDetail>
//       <CommentDetail
//         name="Zee"
//         date="Today at 3:32PM"
//         text="waerguhawieghago"
//         src={faker.image.image()}
//       ></CommentDetail>
//       </Card>
//     </div> */}
