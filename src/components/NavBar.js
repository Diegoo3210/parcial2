import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FormattedMessage } from "react-intl";

function NavBar() {
 return (
   <>
     <Navbar bg="dark" variant="dark">
       <Container>
       <img src="image.png" width={182} height={64} />
         <Navbar.Brand href="/mascotas"><FormattedMessage id = "Bands"/></Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;