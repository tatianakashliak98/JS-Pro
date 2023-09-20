import styled from 'styled-components'
export const StyledPageTemplate = styled.div<{theme:'light' | 'dark' }>`
height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme === 'light' ? 'lightgrey' : '#352323'};
   color: ${({ theme }) => theme === 'light' ? 'black' : '#fff'};
   `