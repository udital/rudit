import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as Loading } from '../images/loading.svg'

export interface IGoogleLoginStates {
    code?: string
}

function GoogleLoginPage() {

    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get('code')

    useEffect(() => {
        setInterval(() => {
            console.log(code)
        }, 1000)
    })

    return (
      <div className='app'>
          <Loading className='absolute center-absolute' width={36}/>
      </div>
    );
}
  
export default GoogleLoginPage