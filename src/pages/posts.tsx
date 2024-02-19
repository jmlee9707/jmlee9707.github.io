import CategoryList from "../components/categoryList";
import Layout from "../layout";

const cate = {
 All : 5,
 Web : 3,
 react : 1,
}
const Posts = () => {
  const selectedCategory = "document.location";

  return (
    <Layout>
      <CategoryList selectedCategory={selectedCategory} categoryList={cate}/>

    </Layout>
  );
};

export default Posts;
