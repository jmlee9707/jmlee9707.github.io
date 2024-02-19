import CategoryHeader from "../components/categoryHeader";
import PostList from "../components/postList";
import Layout from "../layout";

const cate = {
 All : 5,
 Web : 3,
 react : 1,
}

const post = [
  {title : "aa1",date : "ll",category : "dd",summary : "dd",link : "dd"},  
  {title : "aa2",date : "ll",category : "dd",summary : "dd",link : "dd"},  
  {title : "aa3",date : "ll",category : "dd",summary : "dd",link : "dd"},  
  {title : "aa4",date : "ll",category : "dd",summary : "dd",link : "dd"},
]

const Posts = () => {
  const selectedCategory = "All";
  const totalCnt = Object.values(cate).reduce((acc, cur)=>acc+cur, 0);
  const posts = post;
  return (
    <Layout>
      <CategoryHeader selectedCategory={selectedCategory} postsCount = {selectedCategory==="All" ? totalCnt : 12}/>
      <PostList selectedCategory={selectedCategory} categoryList={cate} postList = {posts}/>
    </Layout>
  );
};

export default Posts;
