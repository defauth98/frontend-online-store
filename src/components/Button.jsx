import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/button.css';

class Button extends React.Component {
  render() {
    const { testId, children } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }

      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  testId: 'test',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
};

export default Button;
