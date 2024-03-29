import React, { useRef, useEffect } from 'react';


import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '../styles/fancybox_2.css'

function Fancybox(props) {
  const container = useRef(null);

  useEffect(() => {
    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || {};

    NativeFancybox.bind(container.current, delegate, options);

    return () => {
      NativeFancybox.unbind(container.current);
      NativeFancybox.close();
    };
  });

  return <div className='fancybox_text' ref={container}>{props.children}</div>;
}

export default Fancybox;
