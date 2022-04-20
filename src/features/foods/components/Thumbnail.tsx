import styled from '@emotion/styled'

const Thumbnail = styled.div<{ imageUrl?: string }>`
  position: relative;
  width: 100%;
  height: calc(375px - 2rem);
  border-radius: 10px;
  background-size: cover;
  background-image: ${(props) =>
    `linear-gradient(180deg, rgba(12, 15, 15, 0) 0%, rgba(12, 15, 15, 0.9) 100%), url(${props?.imageUrl})`};
  background-color: #ededed;
`

const ThumbnailContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.25rem;
  }
`

export default Object.assign(Thumbnail, {
  Content: ThumbnailContent,
})
