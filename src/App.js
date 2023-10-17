// Importation des bibliothèques et des composants React Bootstrap
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation du CSS Bootstrap


// Composant pour l'exemple de menu aligné de manière responsive
function MenuAlignResponsiveExample() {
  return (
    <div className="mt-3"> {/* Marge top */}
      {/* DropdownButton pour l'alignement du bouton */}
      <DropdownButton
        as={ButtonGroup}
        align={{ lg: 'end' }} // Alignement pour les grands écrans
        title="Left-aligned but right aligned when large screen" // Titre du bouton
        id="dropdown-menu-align-responsive-1" // ID du composant
      >
        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item> {/* Éléments de menu déroulant */}
        <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
      </DropdownButton>
      {/* SplitButton pour l'alignement du bouton */}
      <SplitButton
        align={{ lg: 'start' }} // Alignement pour les grands écrans
        title="Right-aligned but left aligned when large screen" // Titre du bouton
        id="dropdown-menu-align-responsive-2" // ID du composant
      >
        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item> {/* Éléments de menu déroulant */}
        <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
      </SplitButton>
    </div>
  );
}

// Composant pour l'exemple de carte (Card)
function BasicExample() {
  return (
    <Card style={{ width: '18rem' }} className="mt-4"> {/* Marge top */}
     
      <Card.Body>
        <Card.Title>Card Title</Card.Title> {/* Titre de la carte */}
        <Button variant="primary">Go somewhere</Button> {/* Bouton de la carte */}
      </Card.Body>
    </Card>
  );
}

// Composant principal de l'application
function App() {
  return (
    <div>
      {/* Barre de navigation Bootstrap */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> {/* Marque de la barre de navigation */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link> {/* Lien de navigation */}
              <Nav.Link href="#link">Link</Nav.Link> {/* Lien de navigation */}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item> {/* Éléments de menu déroulant */}
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> {/* Éléments de menu déroulant */}
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> {/* Éléments de menu déroulant */}
                <NavDropdown.Divider /> {/* Séparateur de menu déroulant */}
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> {/* Éléments de menu déroulant */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4"> {/* Marge top */}
        <MenuAlignResponsiveExample /> {/* Exemple de menu aligné de manière responsive */}
        <BasicExample /> {/* Exemple de carte (Card) */}
        {/* Ajoutez deux autres composants de carte ici */}
        <Card style={{ width: '18rem' }} className="mt-4">
          
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="mt-4">
        
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;