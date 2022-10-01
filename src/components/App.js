import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'
import PexelsLogo from './PexelsLogo'

export default class App extends React.Component {

  pexelsClient = null

  state = {
    pics: []
  }


  componentDidMount(){
    this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({query: termo})
    .then(res => this.setState({pics: res.photos}))
  }

  render(){
    return (
      <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
        <div className="col-12">
          <PexelsLogo />
        </div>
        {/* .col-12 */}
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-8">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        {/* .col-8 */}
        <div className="col-8">
          {
            this.state.pics.map((pic, key) => (
              <div key={pic.id}>
                <img src={pic.src.small} alt={pic.alt} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
