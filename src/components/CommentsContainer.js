import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  // Demo Data
  const commentsData = [
    {
      name: "Dexter",
      text: "Lorem ipsum lorem ipsum lorem ipsum",
      replies: [
        {
          name: "Tom",
          text: "Lorem ipsum lorem ipsum lorem ipsum",
          replies: [
            {
              name: "Jerry",
              text: "Lorem ipsum lorem ipsum lorem ipsum",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Bob",
      text: "Lorem ipsum lorem ipsum lorem ipsum",
      replies: [
        {
          name: "Oswald",
          text: "Lorem ipsum lorem ipsum lorem ipsum",
          replies: [
            {
              name: "Noddy",
              text: "Lorem ipsum lorem ipsum lorem ipsum",
              replies: [],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="m-5 p-2 text-white">
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
