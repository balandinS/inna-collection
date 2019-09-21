import React from 'react';
import Grid from '@material-ui/core/Grid';
import CategoryCard from './categoryCard';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: "50px"
    },
}));

export default function CategoryList() {
    const classes = useStyles();
    return (
    <div data-aos="fade-left" className={classes.root}>
        <Grid container spacing={3}  justify="space-between"
  alignItems="center">
            <Grid item xs={4}>
                <CategoryCard category='shirts' media="https://images.pexels.com/photos/1564149/pexels-photo-1564149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=900" path="/products/presentation/shirt" />
            </Grid>
            <Grid item xs={4}>
                <CategoryCard category="Skirts" media="https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=900" path="/products/presentation/skirts" />
            </Grid>
            <Grid item xs={4}>
                <CategoryCard category="Dresses" media="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=900" path="/products/presentation/dresses" />
            </Grid>
        </Grid>
    </div>);
}
