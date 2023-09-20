import styled from 'styled-components'
export const StyledModalContainer = styled.div`
 width:100vw;
 background:grey;
 top:0;
 left:0;
 height:100vh;
 position:fixed;
`
export const StyledModal = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 500px;
height: 500px;
background: white ;
`