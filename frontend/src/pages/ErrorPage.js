import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    let title = 'you broke it....';
    let message = 'oops';

    if(error.status === 500){
        message = JSON.parse(error.data).message;
    }

    if(error.status === 404){
        title = 'NOT FOUND'
        message = 'could not find resource or page'
    }
    return(
      <>
     <PageContent title={title}>
         <p>{message}</p>
     </PageContent>
      </>
    );
}
export default ErrorPage;