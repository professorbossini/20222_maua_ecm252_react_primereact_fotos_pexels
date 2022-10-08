import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'
import ListaImagens from './ListaImagens'

export default class App extends React.Component {

  // pexelsClient = null

  state = {
    pics: []
  }


  componentDidMount(){
    // this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  onBuscaRealizada = (termo) => {
    // this.pexelsClient.photos.search({query: termo})
    // .then(res => this.setState({pics: res.photos}))
    pexelsClient.get('/search', { params: {query: termo} })
    .then(res => this.setState({pics: res.data.photos}))
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

        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>

        {/* .col-8 */}
        <div className="col-12">
          <div className="grid">
            <ListaImagens 
              imgStyle="col-12 md:col-6 lg:col-4 xl:col-3"
              pics={this.state.pics}/>
          </div>  
        </div>
      </div>
    )
  }
}
