import * as S from "./styled";

type CategoryListProps = {
    selectedCategory : string;
    categoryList : {
        [key:string] : number;
    }
}

const CategoryList:React.FC<CategoryListProps> = ({selectedCategory, categoryList})=>{
    const totalCnt = Object.values(categoryList).reduce((acc, cur)=>acc+cur, 0);
    return(
        <S.Wrapper>
            <S.SelectedSection>
                <div>{selectedCategory}</div>
                <div>{totalCnt} posts</div>
            </S.SelectedSection>
        
            <S.MainSection>
                <S.Sidebar>
                    {Object.entries(categoryList).map(([name, cnt])=><S.Chip to = {`/posts/?category=${name}`} selected={name===selectedCategory} key = {name}>{name} #{cnt}</S.Chip>)}
                </S.Sidebar>
                <S.Articles>
                    hhh
                </S.Articles>
                </S.MainSection>
        </S.Wrapper>
    )
}
export default CategoryList