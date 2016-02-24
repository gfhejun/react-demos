var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var App = React.createClass({
    render(){
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="double/1">Double1</Link></li>
                        <li><Link to="double/2">Double2</Link></li>
                    </ul>
                </nav>
                <section>
                </section>
            </div>
        )
    }
});

var Home = React.createClass({
    render(){
        return (
            <div>
                <h2>This is home.</h2>
            </div>
        )
    }
});

var About = React.createClass({
    render(){
        return (
            <div>
                <h2>About</h2>
                <Link to="about/detail">detail</Link>
            </div>
        )
    }
});

var Detail = React.createClass({
    render(){
        return (
            <div>
                <h2>This is detail.</h2>
            </div>
        )
    }
});

var Double1 = React.createClass({
    render(){
        return (
            <div>
                <h2>This is double1.</h2>
            </div>
        )
    }
});

var Double2 = React.createClass({
    render(){
        return (
            <div>
                <h2>This is double2.</h2>
            </div>
        )
    }
});

var NoMatch = React.createClass({
    render(){
        return (
            <div>
                <h2>NoMatch!!!</h2>
            </div>
        )
    }
});


//We can't set the route like this! It will show you About component when you visit Detail!
//<Route path="about" component={About}>
//    <Route path="detail" component={Detail}/>
//</Route>

ReactDOM.render(
    <Router>
        <Route path="/" component={App}/>

        <Route path="about" component={About}/>
        <Route path="about/detail" component={Detail}/>

        <Route path="double">
            <Route path="1" component={Double1}/>
            <Route path="2" component={Double2}/>
        </Route>
        <Route path="home" component={Home}/>
        <Route path="*" component={NoMatch}/>
    </Router>,
    document.getElementById('content')
);