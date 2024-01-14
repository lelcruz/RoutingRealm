import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Some event',
    },
    {
        id: 'e2',
        title: 'Some event 2',
    },
    {
        id: 'e3',
        title: 'Some event 3',
    },

]
function EventPage(){
    return(
        <>
        <h1>Events Page</h1>
        <ul>
            {DUMMY_EVENTS.map(event => <li key={event.id}>
                <Link to={event.id}>{event.title}</Link>
            </li> )}
        </ul>
            </>
    );
}

export default EventPage;