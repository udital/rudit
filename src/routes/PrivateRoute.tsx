import React from 'react'
import { Navigate, Route } from 'react-router-dom'

export type PrivateRouteProps = {
    token: string
    outlet: JSX.Element
}

// todo: check token
function PrivateRoute({ token }: PrivateRouteProps) {
    return <Navigate to={{ pathname: '/login' }}/>
}

export default PrivateRoute