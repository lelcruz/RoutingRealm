import {useParams} from "react-router-dom";

function EventDetail(){
    const params = useParams();
    return(
        <>
            <h1>Testing</h1>
            <p>Event ID: {params.eventId}</p>
        </>
    );
}

export default EventDetail;