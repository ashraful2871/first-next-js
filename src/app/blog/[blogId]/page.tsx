const BlogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  console.log(blogId);
  return (
    <div>
      <h2>blog details: {blogId}</h2>
    </div>
  );
};

export default BlogDetails;
