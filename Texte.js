import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Texte extends Component {
   propTypes = {
    contenu: PropTypes.string.isRequired,
    textStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
    buttonStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
  }

render = () => {
    const { textStyles, buttonStyles, contenu } = this.props;

    return (
      <TouchableOpacity style={buttonStyles}>
        <Text style={textStyles}>{contenu}</Text>
      </TouchableOpacity>
    );
  }
}


export default Texte;