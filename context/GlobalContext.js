import React, { createContext, useReducer } from 'react'


const reducer = (state,action) => {

        switch(action.type) {

            case "displayNavbarDropdown":
                return {...state, showDropdownNavbar: !state.showDropdownNavbar}

            case "displayCloseIcon":
                // return {...state, showCloseIcon: !state.showCloseIcon}  
                return {...state, showCloseIcon: !state.showCloseIcon}  

            default:
                throw new Error();    

        }
    }



export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { showDropdownNavbar:false, showCloseIcon:false })

    const showNavbarMenu = () => {
        dispatch({type:"displayNavbarDropdown"})
    }
    
    const showCloseButton = () => {
        dispatch({type:"displayCloseIcon"})
    }

    return (
        <GlobalContext.Provider value = {{ showNavbarMenu, showCloseButton, showDropdownNavbar: state.showDropdownNavbar, showCloseIcon: state.showCloseIcon }}>
            {props.children}
        </GlobalContext.Provider>
    )

}