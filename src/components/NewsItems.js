
export default function NewsItems(props){
    return(
        <div className="card mt-3 ms-5" style={{"width": "18rem"}}>
            <img src={props.imgURL===null?"https://i.insider.com/63ff5968494c7a0019f21cb0?width=1200&format=jpeg":props.imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title.length<40?props.title:props.title+"..."}</h5>
                    <p className="card-text">{props.description.length<120?props.description:props.description+"..."}</p>
                    <a href={props.redirectURL===null?"#":props.redirectURL} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                </div>
        </div>
    );
};