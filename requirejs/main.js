require.config({
    paths:{
        babel: "bower_components/requirejs-react-jsx/babel-5.8.34.min",
        jsx: "bower_components/requirejs-react-jsx/jsx",
        text: "bower_components/requirejs-text/text",
        a : 'oa',
        b : 'erp'
    }
});

function openOA(){
    require(['jsx!a'], function(App){
        var app = new App();
        app.init();
    });
}

function openERP(){
    require(['jsx!b'], function(App){
        var app = new App();
        app.init();
    });
}