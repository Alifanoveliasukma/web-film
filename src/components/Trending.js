import { Card, Container, Row, Col, Image, Button } from "react-bootstrap" 
import duneImage from "../assets/image/dune.jpg"
import everythingImage from "../assets/image/everything.jpg"
import infiniteImage from "../assets/image/infinite.jpg"
import jokerImage from "../assets/image/joker.jpg"
import lightyearImage from "../assets/image/lightyear.jpg"
import morbiusImage from "../assets/image/morbius.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className=" movieImage" >
                            <Image src={duneImage} alt="Dune Movies"className="images"/>   
                                <div className="bg-dark">  
                                    <div classname="p-2 m-1 text-white">                                   <div className="introButton mt-2 text-center">
                                        <Button variant="dark">DUNE</Button>
                                    </div>
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
                        <Image src={everythingImage} alt="Dune Movies" className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           <div className="introButton mt-2 text-center">
                                        <Button variant="dark">EVERYTHING</Button>
                                    </div>
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
                        <Image src={infiniteImage} alt="Dune Movies"className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           <div className="introButton mt-2 text-center">
                                        <Button variant="dark">INFINITE</Button>
                                    </div>
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
                        <Image src={jokerImage} alt="Dune Movies" className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           <div className="introButton mt-2 text-center">
                                        <Button variant="dark">JOKER</Button>
                                    </div>
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
                        <Image src={lightyearImage} alt="Dune Movies" className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           <div className="introButton mt-2 text-center">
                                        <Button variant="dark">LIGHTYEAR (LGBT)</Button>
                                    </div>
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
                        <Image src={morbiusImage} alt="Dune Movies" className="images"/>   
                            <div className="bg-dark">  
                                <div classname="p-2 m-1 text-white">                                           <div className="introButton mt-2 text-center">
                                        <Button variant="dark">MORBIUS</Button>
                                    </div>
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


export default Trending