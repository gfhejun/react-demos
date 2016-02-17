define(function(){
    function App() {
        this.AppView = React.createClass({
            render: function () {
                return (
                    <div>
                        <p>Hello, this is OA!</p>
                    </div>
                );
            }
        });
    }

    App.prototype.init = function () {
        ReactDOM.render(<this.AppView />, document.getElementById('content'));
    };

    return App;

});