import React from 'react';

class Copyrights extends React.Component {
  render() {

    const style = {
      'background-color' : '#333',
      color : '#fff',
      width: '100%',
      position: 'fixed',
      left:0,
      bottom:0,
      padding: '10px',
    }

    return (
        <footer style={style}>
            <p style={{margin: '0'}}>© copyrights by Johan VAN DER SLOOTEN. Made With ReactJS</p>
        </footer>
    );
  }
}


export default Copyrights;