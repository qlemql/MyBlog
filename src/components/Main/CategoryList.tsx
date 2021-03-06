import React, {ReactNode} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export type CategoryListProps = {
    selectedCategory: string
    categoryList: {
        // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
        [key: string]: number
    }
}

type CategoryItemProps = {
    active: boolean;
  }
  
type GatsbyLinkProps = {
    children: ReactNode;
    className?: string;
    to: string;
} & CategoryItemProps

const CategoryList: React.FC<CategoryListProps> = ({selectedCategory, categoryList}) => {
  return (
    <CategoryListWrapper>
    {Object.entries(categoryList).map(([name, count]) => (
      <CategoryItem
        to={`/?category=${name}`}
        active={name === selectedCategory}
        key={name}
      >
        #{name}({count})
      </CategoryItem>
    ))}
  </CategoryListWrapper>
  )
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
`


const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
    <Link {...props} />
  ))<CategoryItemProps>`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 18px;
    font-weight: ${({ active }) => (active ? '800' : '400')};
    cursor: pointer;
  
    &:last-of-type {
      margin-right: 0;
    }
  `

export default CategoryList