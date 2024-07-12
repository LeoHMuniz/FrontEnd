import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    defaultMethod: "creditCard",
    coffeesOnCart: []
});


export { useGlobalState, setGlobalState };