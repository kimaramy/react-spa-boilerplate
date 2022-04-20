import styled from '@emotion/styled'

interface Typography {
  isGray?: boolean
  isBold?: boolean
}

export const getTextColor = (isGray: boolean) => (isGray ? '#676E7F' : '#FFFFFF')

const DisplayMd = styled.p`
  font-size: 2.5rem;
  line-height: 1.45;
  font-weight: 700;
  color: #ffffff;
`

const DisplaySm = styled.p`
  font-size: 1.875rem;
  line-height: 1.45;
  font-weight: 700;
  color: #ffffff;
`

const HeadingLg = styled.h1<Typography>(({ isGray = false, isBold = true }) => ({
  fontSize: '1.5rem', // 24px
  lineHeight: 1.45,
  fontWeight: isBold ? '700' : '400',
  margin: 0,
  color: getTextColor(isGray),
}))

const HeadingMd = styled.h2<Typography>(({ isGray = false, isBold = true }) => ({
  fontSize: '1.25rem', // 20px
  lineHeight: 1.45,
  fontWeight: isBold ? '700' : '400',
  margin: 0,
  color: getTextColor(isGray),
}))

const HeadingSm = styled.h3<Typography>(({ isGray = false, isBold = true }) => ({
  fontSize: '1.125rem', // 18px
  lineHeight: 1.45,
  fontWeight: isBold ? '700' : '400',
  margin: 0,
  color: getTextColor(isGray),
}))

const BodyLg = styled.p<Typography>(({ isGray = false, isBold = false }) => ({
  fontSize: '1rem',
  lineHeight: 1.45,
  fontWeight: isBold ? '700' : '400',
  margin: 0,
  color: getTextColor(isGray),
}))

const BodyMd = styled.p<Typography>(({ isGray = false, isBold = false }) => ({
  fontSize: '0.875rem',
  lineHeight: 1.45,
  fontWeight: isBold ? '700' : '400',
  margin: 0,
  color: getTextColor(isGray),
}))

const BodySm = styled.p<Typography>(({ isGray = false, isBold = false }) => ({
  fontSize: '0.75rem',
  lineHeight: 1.45,
  fontWeight: isBold ? '700' : '400',
  margin: 0,
  color: getTextColor(isGray),
}))

export const Display = Object.assign(
  {},
  {
    Md: DisplayMd,
    Sm: DisplaySm,
  },
)

export const Heading = Object.assign(
  {},
  {
    Lg: HeadingLg,
    Md: HeadingMd,
    Sm: HeadingSm,
  },
)

export const Body = Object.assign(
  {},
  {
    Lg: BodyLg,
    Md: BodyMd,
    Sm: BodySm,
  },
)
