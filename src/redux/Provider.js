import { Provider } from "react-redux";
import ReduxApp from "./ReduxApp";
import Store from "./Store";

export default function ReduxProviderComp() {
    return (
        <Provider store={Store}>
            <ReduxApp />
        </Provider>
    );
}