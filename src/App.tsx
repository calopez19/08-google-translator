import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/icons";
import { LanguageSelector } from "./components/LanguageSelector";
function App() {
  const {
    fromLanguage,
    toLanguage,
    setFromLanguage,
    interchangeLanguages,
    setToLanguage,
  } = useStore();

  return (
    <Container fluid>
      <h1>Google translator clone</h1>
      <Row>
        <Col>
          <h2>From</h2>
          <LanguageSelector
            onChange={setFromLanguage}
          ></LanguageSelector>
          <h4>{fromLanguage}</h4>
        </Col>
        <Col>
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={() => {
              interchangeLanguages();
            }}
          >
            <ArrowsIcon></ArrowsIcon>
          </Button>
        </Col>
        <Col>
          <h2>To</h2>
          <LanguageSelector
            onChange={setToLanguage}
          ></LanguageSelector>
          <h4>{toLanguage}</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
