function NationBox({nationCount}) {
    return <a href="/" className={`nationBox nation${nationCount}`}>{nationCount}</a> 
}

export default NationBox;