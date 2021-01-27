import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
`

const Container = ({ children }) => {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}

export default Container
