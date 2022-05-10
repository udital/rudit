import { useEffect, useState } from 'react';
import { ReactComponent as Loading } from '../images/loading.svg'

export interface IGoogleLoginStates {
    code?: string
}

function GoogleLoginPage() {

    let [state, setState] = useState<IGoogleLoginStates>({
        code: undefined
    })

    useEffect(() => {
        setInterval(() => {
            console.log(state.code)
        }, 1000)
    })

    return (
      <div className='app'>
          <Loading className='absolute center-absolute' width={36}/>
      </div>
    );
}
  
export default GoogleLoginPage