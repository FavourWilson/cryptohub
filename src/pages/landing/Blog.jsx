import Nav from "../../components/organisms/Nav";
import Blogs from "../../components/templates/Blog";

const Blog = () => {
  return (
    <>
      <Nav />
      <div className="mt-16 lg:mt-24">
        <Blogs />
      </div>
    </>
  )
}

export default Blog