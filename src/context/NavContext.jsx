import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { usePageTransition } from '../hooks/usePagetransition'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()
export const LoaderContext = createContext()
export const TransitionContext = createContext()

const NavContext = ({ children }) => {

    const [navColor, setNavColor] = useState('white')
    const [navOpen, setNavOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const { handleRouteChange, isTransitioning } = usePageTransition()

    const locate = useLocation().pathname
    useEffect(function(){
        if(locate === '/projects' || locate === '/agence'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])

    // loading state is now controlled by Loader component


    return (
        <div>
            <TransitionContext.Provider value={{ handleRouteChange, isTransitioning }}>
                <NavbarContext.Provider value={[navOpen, setNavOpen]}>
                    <NavbarColorContext.Provider value={[navColor,setNavColor]}>
                        <LoaderContext.Provider value={[loading, setLoading]}>
                            {children}
                        </LoaderContext.Provider>
                    </NavbarColorContext.Provider>
                </NavbarContext.Provider>
            </TransitionContext.Provider>
        </div>
    )
}

export default NavContext