import { styled } from "styled-components";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
const App = () =>{
  return(
    <AppStyled className="App">
      <Orb/>
      <MainLayout>
       <h1>Hello</h1>
      </MainLayout>
      <Navigation/>
      </AppStyled>
  )
}

const AppStyled = styled.div`
height: 100hv;
position:relative
`;
export default App;