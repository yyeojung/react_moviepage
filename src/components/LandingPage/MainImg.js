
function MainImg(props) {
    return (
        <div className="main_img" 
            style={
                {backgroundImage:`url('${props.img}')`}
        }>
            <div className="main_desc">
                <h2>{props.title}</h2>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}
export default MainImg