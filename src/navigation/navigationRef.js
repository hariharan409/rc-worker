import { createNavigationContainerRef,StackActions } from "@react-navigation/native";


export const navigateRef = createNavigationContainerRef();

export const navigate = (name,params) => {
    if(navigateRef.isReady()) {
        navigateRef.current.dispatch(StackActions.replace(name, params));
    }
}