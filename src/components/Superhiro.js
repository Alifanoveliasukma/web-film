import { Card, Container, Row, Col, Image } from "react-bootstrap" 
import antmanImage from "../assets/image/antman.jpg"
import avengerImage from "../assets/image/avenger.jpg"
import batmanImage from "../assets/image/batman.jpg"
import robinhoodImage from "../assets/image/robinhood.jpg"
import spidermanImage from "../assets/image/spiderman-cover.jpg"
import supermanImage from "../assets/image/superman.jpg"

const Superhiro = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHIRO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhiro">
                        <Card className=" movieImage" >
                            <Image src={antmanImage} alt="Dune Movies"className="images"/>   
                                <div className="bg-dark">  
                                    <div classname="p-2 m-1 text-white">                                           
                                    <Card.Title className="text-center text-white">ANTMAN</Card.Title>
                                    <Card.Text className="text-left text-white">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. 
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>  
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className=" movieImage" >
                        <Image src={avengerImage} alt="Dune Movies" className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           
                                    <Card.Title className="text-center text-white">AVENGER</Card.Title>
                                    <Card.Text className="text-left text-white">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. 
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>  
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className=" movieImage" >
                        <Image src={batmanImage} alt="Dune Movies"className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           
                                    <Card.Title className="text-center text-white">BATMAN</Card.Title>
                                    <Card.Text className="text-left text-white">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. 
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>  
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className=" movieImage" >
                        <Image src={robinhoodImage} alt="Dune Movies" className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           
                                    <Card.Title className="text-center text-white">ROBINHOOD</Card.Title>
                                    <Card.Text className="text-left text-white">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. 
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>  
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className=" movieImage" >
                        <Image src={spidermanImage} alt="Dune Movies" className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           
                                    <Card.Title className="text-center text-white">SPIDERMAN</Card.Title>
                                    <Card.Text className="text-left text-white">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. 
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>  
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className=" movieImage" >
                        <Image src={supermanImage} alt="Dune Movies" className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           
                                    <Card.Title className="text-center text-white">SUPERHERO</Card.Title>
                                    <Card.Text className="text-left text-white">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. 
                                    </Card.Text>
                                    <Card.Text className="text-left text-white">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>  
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}


export default Superhiro