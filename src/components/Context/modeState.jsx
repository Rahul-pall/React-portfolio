import ModeContext from "./ModeContext";
const ModeState=(props)=>{
              const s1={
                 background:"black",
                 color:"white"
              }
              return(
                 <ModeContext.Provider value={s1}>
                            {props.children}
                 </ModeContext.Provider>
              )
}
export default ModeState;