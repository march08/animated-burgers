// @flow
import React from 'react'
import classnames from 'classnames'
import './styles.scss'

const Burger = ({
  className,
  barClassName,
  Component,
  isOpen,
  direction = null,
  ...rest
}) => (
  <Component
    className={ classnames('burger', className, {
      open: isOpen,
      [`burger-${direction}`]: direction,
    }) }
    { ...rest }
  >
    <div 
      className={ classnames('burger-lines', barClassName) }
    />
  </Component>
)

Burger.defaultProps = {
  className: null,
  barClassName: null,
  Component: 'div',
  isOpen: false,
  direction: null,
}


export const createBurger = defaultClassName => ({ className, direction, ...rest }) => (
  <Burger
    className={ classnames(defaultClassName, className, {
      [`burger-${direction}`]: direction,
    }) }
    { ...rest }
  />
)
export default Burger
