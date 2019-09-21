import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchPresentation } from '../../action'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Presentation extends React.Component {
  componentDidMount() {
    this.props.fetchPresentation()
  }
  renderList() {
    const { category } = this.props.match.params;
    if (this.props.presentation.idModel !== null) {
      return this.props.presentation.map((product, index) => {
        return (
          <Grid key={index} item xs={4}>
            <Card >
              <Link to={`/pruduct/list/${category}/${product.nameModel}`}>
                <CardActionArea>
                  <CardMedia className="size-image"
                    image={product.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Product Name Model  {product.nameModel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.price} NIS
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Category {category}
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
    } else {
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
    }
  }

  render() {
    console.log(this.props)
    return (
      <div data-aos="fade-left" style={{ marginTop: "25px" }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
        >
          {this.renderList()}
        </Grid>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { presentation: state.presentation }
}
export default connect(mapStateToProps, { fetchPresentation })(Presentation)