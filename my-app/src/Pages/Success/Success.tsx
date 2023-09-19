import React, { useContext } from 'react'
import ButtonSign from '../../components/ButtonSign/ButtonSign'
// import { ThemeContext } from '../../App'
import { StyledContainer } from './styled'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import { StyledForm } from '../SignIn/Styled'
const Success = () => {
   // const { theme, toggleTheme } = useContext(ThemeContext)

   return (
      <PageTemplate title='Success'>
         <StyledForm>
            {/* <button onClick={toggleTheme}>kjnhk</button> */}
            <StyledContainer
            // theme={`${theme}`}
            >
               Email Confirmed
               <br />
               Your registration in move completed
            </StyledContainer>
            <ButtonSign titleButton='Go to home' />
         </StyledForm>
      </PageTemplate>
   )
}

export default Success
