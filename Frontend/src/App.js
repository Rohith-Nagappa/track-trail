import { styled } from "styled-components";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";

const App = () =>{
  return(
    <AppStyled className="App">
      <Orb/>
      <MainLayout>
      <Navigation/>
      </MainLayout> 
      </AppStyled>
  )
}

const AppStyled = styled.div`
height: 100hv;
position:relative
`;
export default App;