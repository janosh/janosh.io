import styled, { css } from "styled-components"
import Image from "gatsby-image"
import { Calendar } from "styled-icons/octicons/Calendar"
import { Package } from "styled-icons/feather/Package"
import { Github } from "styled-icons/icomoon/Github"
import { Npm } from "styled-icons/fa-brands/Npm"
import { Link } from "styled-icons/boxicons-regular/Link"

import Grid from "../../components/styles/Grid"

export const ProjectGrid = styled(Grid)`
  ${props =>
    props.asRow &&
    css`
      grid-column: 2/-2;
      grid-auto-flow: column;
      overflow: scroll;
    `};
`

export const Thumbnail = styled.div`
  border-radius: ${props => props.theme.mediumBorderRadius};
  overflow: hidden;
  display: grid;
  width: 100%;
  height: 100%;
  h3 {
    grid-area: 1 / 1;
    z-index: 1;
    color: ${props => props.theme.white};
    align-self: center;
    justify-self: center;
    background: rgba(0, 0, 0, 0.6);
    font-size: 1.6em;
    padding: 0.3em 0.7em;
    text-align: center;
    border-radius: 1em;
    max-width: 70%;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
  }
  &:hover h3 {
    visibility: visible;
    opacity: 1;
  }
`
export const Img = styled(Image)`
  grid-area: 1 / 1;
`

export const Meta = styled.div`
  margin: 1em 0;
  border-left: ${({ theme }) =>
    `${theme.largeBorder} solid ${theme.lightGreen}`};
`

const iconCss = css`
  width: 1em;
  vertical-align: -0.15em;
  margin: 0 0.3em 0 1em;
`

export const Date = styled(Calendar)`
  ${iconCss}
`

export const GitHub = styled(Github)`
  ${iconCss}
`

export const NPM = styled(Npm)`
  ${iconCss};
  width: 1.7em;
  vertical-align: -0.7em;
`

export const Tech = styled(Package)`
  ${iconCss}
`

export const Homepage = styled(Link)`
  ${iconCss}
`
