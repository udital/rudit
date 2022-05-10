import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../stylesheets/App.css'

export enum ModalOptions {
    DeleteCancel,
    Ok
}

export interface IModalStates {
    open: boolean
}

export interface IModalProps {
    children?: React.ReactNode,
    modalOption: ModalOptions
}

function Modal(props: IModalProps) {
    
    let [state, setState] = useState<IModalStates>({
        open: true
    })
    const closeModal = () => {setState({ open: false })}
    let { children, modalOption } = props

    return (
        <div className={ state.open ? "back-modal" : "transition-opacity-2 opacity-0 back-modal" }>
                        <div className={state.open ? 'rounded-2xl transition-shadow shadow-2xl pl-7 pr-7 pt-7 pb-2 absolute center-absolute bg-white' : 'transition-opacity-2 opacity-0 rounded-2xl transition-shadow shadow-2xl pl-7 pr-7 pt-7 pb-2 absolute center-absolute bg-white'}>
                            <div className="relative">
                                <p className="text-center">
                                    {children}
                                </p>
                                <br/>
                                
                                    { modalOption === ModalOptions.DeleteCancel ? (
                                        <div className="text-center">
                                            <span onClick={closeModal} style={{marginRight: 120}} className='font-bold text-red-500 cursor-pointer'>삭제</span>
                                            <span onClick={closeModal} className="cursor-pointer">취소</span>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <span onClick={closeModal} className="cursor-pointer">예</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
    )
}

export default Modal