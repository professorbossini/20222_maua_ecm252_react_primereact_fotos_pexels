import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
export class Busca extends Component {

  state = {
    termoDeBusca: ''
  }

  render() {
    return (
      <div className='flex flex-column'>
        {/* span.p-input-icon-left.w-full */}
        <span className="p-input-icon-left w-full">
          <i className='pi pi-search'></i>
          <InputText className='w-full'/>
        </span>
        <Button 
          label='OK'
          className='p-button-outlined mt-2'
        />
      </div>
    )
  }
}

export default Busca