// for components that just needs styling
import * as React from 'react'
import classnames from 'classnames'

const createSimpleComponent = ({
  displayName,
  className: cl,
  Component = 'div',
}: {
  displayName: String,
  className?: String,
  Component: React.ElementType
}) => {
  class SimpleComponent extends React.PureComponent<{
    className?: String,
    Component?: React.ElementType,
    children?: React.node,
  }> {
    render() {
      const {
        className,
        Component: PComponent,
        children,
        ...rest
      } = this.props
      return (
        <PComponent
          className={ classnames(cl, className) }
          { ...rest }
        >
          {children}
        </PComponent>
      )
    }
  }

  SimpleComponent.defaultProps = {
    className: null,
    Component,
    children: null,
  }

  SimpleComponent.displayName = displayName

  return SimpleComponent
}


export default createSimpleComponent
