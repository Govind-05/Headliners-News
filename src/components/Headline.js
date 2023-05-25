
export default function Headline(props){
    return(
        <div style={{"textAlign":"center"}}>
            <h2 className=" mt-2">
                HEADLINERS-
                <small className="text-body-secondary">{props.title}</small>
            </h2>
        </div>
    );
}