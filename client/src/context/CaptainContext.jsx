import { createContext,useState,useContext } from "react";


export const CaptainDatacontext = createContext();




const CaptainContext = ({children}) => {
    const[captain,setCaptain]=useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState(null);
    const updateCaptain=(captainData)=>{
        setCaptain(captainData);
    };
    const value={
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        setError,
        error,
        updateCaptain
    };
    return (
        <div>
            <CaptainDatacontext.Provider value={value}>
                {children}
            </CaptainDatacontext.Provider>
        </div>
    )
}

export default CaptainContext;