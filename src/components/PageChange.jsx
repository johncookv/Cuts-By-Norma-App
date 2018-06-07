import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'

class PageChange extends Component{

	constructor(props){
		super(props);
		this.previousPage = null
		this.currentPage = this.props.location.pathname
	}

	render() {
    this.previousPage = this.currentPage
    this.currentPage = this.props.location.pathname

		if (this.currentPage !== this.previousPage) {
			PubSub.publish('PAGE_CHANGED', {previousPage: this.previousPage, currentPage: this.currentPage})
		}
		
		return false
	}
}

export default withRouter(PageChange)