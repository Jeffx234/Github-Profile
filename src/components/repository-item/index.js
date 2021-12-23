import React from 'react'
import * as S from './styled'

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  console.log(linkToRepo)
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.WrapperLink
        href={`http://github.com/${linkToRepo}`}
        target="_blank"
        rel="noreferrer"
      >
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoryItem
