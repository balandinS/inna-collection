import React from 'react';
import HeaderMaterial from './headerMaterial'
import Footer from './Footer'
import history from '../history';
import { Router, Route, Switch } from 'react-router-dom';
import Category from "./CategoryList";
import ProductList from './products/productList';
import ProductShow from './products/productShow'
import productPresentation from "./products/productPresentation"
import Gallery from './gallery'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const App = (porps) => {
    AOS.init()
    return (
        <div >
            <Router history={history}>
                <div>
                    <HeaderMaterial />
                    <Switch>
                        <Route exact path="/" component={Category} />
                        <Route exact path="/products/presentation/:category" component={productPresentation} />
                        <Route path="/pruduct/list/:category/:namemodel" component={ProductList} />
                        <Route path="/product/show/:id" component={ProductShow} />
                        <Route path="/gallery" component={Gallery} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    )
}


export default App