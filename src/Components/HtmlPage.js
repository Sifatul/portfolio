import React from 'react';
var __html = require('../../public/cls score/Index.html');

var template = { __html: __html };

React.module.exports = React.createClass({
  render: function() {
    return(
      <div dangerouslySetInnerHTML={template} />
    );
  }
});