'use strict';

import React from 'react';
import _ from 'lodash';

const MonthPickerTop = React.createClass({

  propTypes: {
    visibleDate:         React.PropTypes.any.isRequired,
    onChangeVisibleDate: React.PropTypes.func.isRequired,
    onChangeMode:        React.PropTypes.func.isRequired,
    fixedMode:           React.PropTypes.bool,
    className:           React.PropTypes.string.isRequired
  },

  changeYear(year) {
    this.props.visibleDate.year(year);
    this.props.onChangeVisibleDate(this.props.visibleDate);
  },

  changeMode() {
    if (!this.props.fixedMode) {
      this.props.onChangeMode('year');
    }
  },

  render() {
    const year = this.props.visibleDate.year();
    return (
      <div className='top'>
        <div className='display'>
          <div className='button left' onClick={_.partial(this.changeYear, (year - 1))}>
            &lt;
          </div>
          <div className={'button label' + (this.props.fixedMode? ' fixed' : '')}  onClick={this.changeMode}>
            <strong className={this.props.textClassNames}>{year}</strong>
          </div>
          <div className='button right' onClick={_.partial(this.changeYear, (year + 1))}>
            &gt;
          </div>
        </div>
      </div>
    );
  }
});

export default MonthPickerTop;