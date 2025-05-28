import {Component} from 'react'

import MoleculePagination from 'components/molecule/pagination/src/index.js'

import {nextButtonIcon, prevButtonIcon} from '../Icons/index.js'

const Icons = {prevButtonIcon, nextButtonIcon}

class DynamicMoleculePagination extends Component {
  state = {
    page: this.props.page // eslint-disable-line
  }

  handlePageUpdate = (e, {page}) => {
    console.log({e, page}) // eslint-disable-line
    this.setState({page}, () => {
      console.log(this.state) // eslint-disable-line
    })
  }

  render() {
    const {page} = this.state
    const {handlePageUpdate} = this
    return (
      <div>
        <MoleculePagination
          ariaLabel="Paginación"
          prevLinkAriaLabel="Página previa"
          nextLinkAriaLabel="Página siguiente"
          pagePrefixAriaLabel="Página"
          {...Icons}
          {...this.props}
          page={page}
          onSelectNext={handlePageUpdate}
          onSelectPrev={handlePageUpdate}
          onSelectPage={handlePageUpdate}
        />
        <pre>{JSON.stringify({...this.props, ...this.state}, null, 2)}</pre>
      </div>
    )
  }
}

export default DynamicMoleculePagination
