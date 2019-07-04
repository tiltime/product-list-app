import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {

    return {}
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  render () {
    return (
      <Layout>
      </Layout>)
  }
}
const mapDispatchToProps = {}
export default connect(
  null,
  mapDispatchToProps
)(Index)
