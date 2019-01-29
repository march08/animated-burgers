import React from 'react'
import classnames from 'classnames'
import './b-container-item.scss'


export default ({ className, children, ...rest }) => (
  <div
    className={ classnames('b-container-item', className) }
    { ...rest }
  >
    <div className="b-container-item-inner">
      {children}
    </div>
  </div>
)
