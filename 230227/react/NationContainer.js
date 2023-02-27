export default function NationContainer({imgAr,btn_click,changeImage}) {
    // let btn = imgAr.length
    let btn = new Array(imgAr.length);
    for(let i = 0; i < imgAr.length; i++) {
        btn[i] =  <a href="#" 
                key={`list${i+1}`} 
                onClick = {btn_click} 
                className={`nationBox nation${i+1}`}
                
                style = {{opacity:`${i === changeImage ? 1 : .5}`}}
                >{i+1}

                </a>
            }
    

    return(     
        <div className="nation_container">
            {btn}
        </div>
    );

}