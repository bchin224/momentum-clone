import React, { Component } from 'react'
// import axios for making http requests
import axios from 'axios'

// api url + random photo url GET extension + client id
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=rhy5w5kA-6vOu0XFIEHga_1ceg39oh5ozZ8sIdEys04'

// REMOVE SPACE AFTER RANDOM TO MAKE PHOTO ACTUALLY SHOW UP

class ShowPhoto extends Component {
  constructor () {
    super()

    this.state = {
      photo: null
    }
  }

  componentDidMount () {
    return axios({
      url: apiUrl,
      method: 'GET'
    })
    .then(res => this.setState({ pictureUrl: res.data.urls.regular }))
    .catch('Error loading background', console.error)
  }

  // render photo
  render () {
    const { pictureUrl } = this.state
    let backgroundPhoto = <img src={pictureUrl} alt='random'/>

    return (
      <div id="background-photo">
        {backgroundPhoto}
      </div>
    )
  }
}

export default ShowPhoto
