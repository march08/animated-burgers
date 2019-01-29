// @flow
import React from 'react'
import classnames from 'classnames'
import './styles.scss'

const Burger = ({
  className,
  Component,
  isOpen,
  ...rest
}) => (
  <Component
    className={ classnames('burger', className, {
      open: isOpen,
    }) }
    { ...rest }
  >
    <div className="burger-lines" />
  </Component>
)

Burger.defaultProps = {
  className: null,
  Component: 'div',
  isOpen: false,
}


export const createBurger = defaultClassName => ({ className, ...rest }) => (
  <Burger
    className={ classnames(defaultClassName, className) }
    { ...rest }
  />
)
export default Burger
