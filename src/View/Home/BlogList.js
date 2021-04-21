const BlogList = (props) => {

    const blogs = props.blogs;

    return (
        <div className="blog-list">
            { blogs.map((blog) => (
                <div className="card col-sm-3" key={ blog.id }>
                    <div className="card-body">
                        <h2>{ blog.title }</h2>
                        <p> Written by { blog.author } </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default BlogList;