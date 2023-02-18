function NationBox({nationCount,opacity}) {
    return <a href="#" className = 'nationBox' style = {{opacity}}>{nationCount}</a> 
}

NationBox.defaultProps = {
    opacity : '.5'
}

export default NationBox;