import { useEffect, useRef, forwardRef } from "react";

function SearchField(props,ref) {

  

    return <input ref={ref}  placeholder='Enter Search Term' />
 }

 export default forwardRef(SearchField);