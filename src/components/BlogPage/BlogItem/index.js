import {
  BlogCard,
  BlogImage,
  BlogTitle,
  BlogKeyTerm,
  BlogDescription,
} from "./BlogItemStyledComponents";

const BlogItem = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <BlogCard>
      <BlogImage src={data.imageUrl} alt={data.title} />
      <BlogTitle>{data.title}</BlogTitle>
      <BlogKeyTerm>Leave a Comment / {data.keyvalue}/By admin </BlogKeyTerm>
      <BlogDescription>{data.description}</BlogDescription>
      <hr />
    </BlogCard>
  );
};

export default BlogItem;
