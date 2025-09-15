export const AppContext = createContext(null);
const Context = ({children}) => {

    const contextValue = {

    }
return(
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
)


}
export default Context


