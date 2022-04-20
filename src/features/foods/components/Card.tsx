import styled from '@emotion/styled'

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  min-height: 100%;
  margin-top: 1.5rem;
  list-style: none;
  padding: 0;
`

const Card = styled.li`
  display: flex;
  width: calc(100% - 2rem);
  height: 6rem;
  display: flex;
  cursor: pointer;
`

const CardThumbnail = styled.div`
  flex: none;
  display: flex;
`

const CardThumbnailGrade = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 6rem;
  background-color: ${(props) => props.bgColor || '#ededed'};
  border-radius: 10px 0px 0px 10px;
`

const CardThumbnailImage = styled.img`
  width: 6rem;
  height: 6rem;
  background-color: #ededed;
  border-radius: 0px 10px 10px 0px;
  object-fit: cover;
`

const _CardThumbnail = Object.assign(CardThumbnail, {
  Grade: CardThumbnailGrade,
  Image: CardThumbnailImage,
})

const CardContent = styled.div`
  flex: 1;
  height: 100%;
  padding-left: 0.75rem;
`

export default Object.assign(Card, {
  List: CardList,
  Thumbnail: _CardThumbnail,
  Content: CardContent,
})
