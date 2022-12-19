import { EnvironmentInjector } from "@angular/core";
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { getAngularInjector } from "../main";

export const AngularInjectorContext = createContext<
  EnvironmentInjector | undefined
>(undefined);

function AngularInjectorProvider(props: { children: ReactElement }) {
  const EnvironmentInjectorRef = useRef<EnvironmentInjector>();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    getAngularInjector().then((injector) => {
      EnvironmentInjectorRef.current = injector;
      forceUpdate();
    });
  }, []);
  if (!EnvironmentInjectorRef.current) {
    return <></>;
  }

  return (
    <AngularInjectorContext.Provider value={EnvironmentInjectorRef.current}>
      {props.children}
    </AngularInjectorContext.Provider>
  );
}

export const useAngularInjector = () => {
  const context = useContext(AngularInjectorContext);
  return context!;
};

export default AngularInjectorProvider;
