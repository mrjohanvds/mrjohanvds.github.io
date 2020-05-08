import React from 'react';

class Copyrights extends React.Component {
  render() {

    const style = {
        position: 'absolute',
        bottom:0
    }

    return (
    <footer style = {style}>
        <p style = {{margin : "10px"}}>© copyrights by Johan VAN DER SLOOTEN. Made With ReactJS</p>
    </footer>
    );
  }
}


export default Copyrights;