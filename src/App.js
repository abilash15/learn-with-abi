import React from "react";
import Index from "pages/index";
import Blog from "pages/blog";
import Books from "pages/books";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/blog' component={Blog}/>
			<Route exact path='/books' component={Books}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
