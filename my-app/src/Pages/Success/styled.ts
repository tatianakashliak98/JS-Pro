import styled from 'styled-components'
export const StyledContainer = styled.span<{theme:'light'|"dark "}>`
padding-bottom: 20px; 
background: ${(props:any)=> props.theme === "dark" ? "#fff" : '#111'};
color: ${(props:any)=> props.theme === "dark" ? "#fff" : '#111'};
`