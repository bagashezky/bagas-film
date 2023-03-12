import { Col, Container, Row, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import duneImage from "../assets/images/trending/dune.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='movieImage' id="trending">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={duneImage} alt="Dune Movies"/>
                            <Card.Title className='text-center'>Card title</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending