  export  interface RC<P = {}> extends React.FC<P> { } // react component
    export interface RPO<P = {}> extends React.FC<P & { children?: ReactNode }> { } // react provider
   export interface RPL<P = {}>
      extends React.FC<P & { children?: any; title?: string }> { } // React layout
