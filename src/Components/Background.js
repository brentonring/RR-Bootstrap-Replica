import Card from 'react-bootstrap/Card';

export default function Background() {
    return (
        <div style={{justifyContent: 'center'}}>
            <Card style={{background: '#deedd6', display: 'flex', flexDirection: 'row-reverse', minHeight: '220px'}}>
                <Card.Img src='https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg' />
                <Card.ImgOverlay>
                    <Card.Title style={{fontSize: 'larger', width: '578px'}}>
                        <h1>Order groceries for delivery or pickup today</h1>
                    </Card.Title>
                    <Card.Text>
                        <p>Whatever you want from local stores, brought right to your door.</p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}