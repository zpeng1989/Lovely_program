(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('I LOVE YOU'))
        .then(() => engine.shake())
        .then(() => engine.toText('这段代码'))
        .then(() => engine.shake())
		.then(() => engine.toText('三年前就写好了'))
        .then(() => engine.shake())
		.then(() => engine.toText('一直没用上'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
