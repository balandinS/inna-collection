import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProducts } from '../../action'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ProductList extends React.Component {
    
    componentDidMount() {
        const { namemodel } = this.props.match.params
        this.props.fetchProducts(namemodel)
    }
    renderList(len) {
        const { category } = this.props.match.params;
        if (this.props.products.idModel === null) {
            return (
                <div className="ui container">
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">Loading</div>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            )
        }else{
            return this.props.products.map((product, index) => {
                return (
                    <Grid key={index} item xs={3} md={4} lg={4}>
                        <Card >
                            <Link to={`/product/show/${index}`}>
                                <CardActionArea>
                                    <CardMedia
                                        className="size-image"
                                        image={product.image}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Id Product  {product.idModel}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Id Product  {product.idModel}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {product.price} NIS
                                         </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })
        }
    }
    render() {
        return (
            <div  
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2000"
            style={{ marginTop: "25px" }}>
                <Grid 
                container 
                spacing={3}>
                    {this.renderList()}
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { products: state.products }
}
export default connect(mapStateToProps, { fetchProducts })(ProductList)