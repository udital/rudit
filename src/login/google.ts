import React from "react";
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { NavigateFunction } from "react-router-dom";

export function onSuccess(response: GoogleLoginResponse | GoogleLoginResponseOffline, navigate: NavigateFunction) {
    console.log('success')
    navigate('/google_cb', {
        state: {
            code: response.code
        }
    })
}