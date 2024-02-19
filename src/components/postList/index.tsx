import PostCardItem from '../postCardItem';
import * as S from './styled';

type PostListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
  postList: any;
};

const PostList: React.FC<PostListProps> = ({ selectedCategory, categoryList, postList }) => {
  return (
    <S.Wrapper>
      <S.Sidebar>
        {Object.entries(categoryList).map(([name, cnt]) => (
          <S.Chip to={`/posts/?category=${name}`} selected={name === selectedCategory} key={name}>
            {name} #{cnt}
          </S.Chip>
        ))}
      </S.Sidebar>
      <S.Articles>
        {postList.map((post) => (
          <PostCardItem
            key={post.title}
            title={post.title}
            date={post.date}
            category={post.category}
            summary={post.summary}
            link={post.link}
          />
        ))}
      </S.Articles>
    </S.Wrapper>
  );
};
export default PostList;
