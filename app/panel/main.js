import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar.jsx';
import Content from './components/content.jsx';

main();

function main() {
    var options = {

    };
    var element = React.createElement(Content, options);
    ReactDOM.render(element, document.querySelector('.container'));
}