function Gallery(props){
    return (
        <div style={{'width': 'border-box'}}>
            <img src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery;