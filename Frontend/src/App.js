import { styled } from "styled-components";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
const App = () =>{
  return(
    <AppStyled className="App">
      <Orb/>
      <MainLayout>
       <h1>Hello</h1>
      </MainLayout>
      </AppStyled>
  )
}

const AppStyled = styled.div`
height: 100hv;
position:relative
`;
export default App;