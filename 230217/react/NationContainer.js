import NationBox from "./NationBox";

function NationContainer(){
    return(     
        <div className="nation_container">
            <NationBox nationCount = "1"/>
            <NationBox nationCount = "2"/>
            <NationBox nationCount = "3"/>
            <NationBox nationCount = "4"/>
            <NationBox nationCount = "5"/>
        </div>
    );
}

export default NationContainer;