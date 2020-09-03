import React from "react"
//this is for code spliting
export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null
    state = { Component: AsyncComponent.Component }

    constructor(props) {
      super(props)
      if (AsyncComponent.Component) return
    }

    componentDidMount = () => {
      getComponent().then(({ default: Component }) => {
        AsyncComponent.Component = Component
        this.setState({ Component })
      })
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}
