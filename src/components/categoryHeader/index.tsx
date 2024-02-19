import * as S from "./styled";

type CategoryHeaderProps = {
    selectedCategory : string;
    postsCount : number
}

const CategoryHeader:React.FC<CategoryHeaderProps> = ({selectedCategory, postsCount})=>{

    return(
        <S.Wrapper>
            <div>{selectedCategory}</div>
            <div>{postsCount} posts</div>
        </S.Wrapper>
    )
}
export default CategoryHeader