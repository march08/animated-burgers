import React from 'react'
import classnames from 'classnames'

import cls from './Code.module.scss'

export default ({ className, children }) => (

  <pre>
    <code className={ classnames(cls.wrapper, className) }>
      {children}
    </code>

  </pre>
)
