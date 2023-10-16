import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className=" flex flex-col items-center justify-center">
        <div>
            {/* <img src={} alt="" /> */}
        </div>
        <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    );
};

export default Error;