import * as React from 'react';
import { FaBeer } from 'react-icons/fa';


type IconProps = {
}

export default function Icon (props: IconProps) {
  return (
    <div style={{display: 'flex', 
    alignSelf: 'center',
     padding: "8.5%",
     borderRadius: 50,
     background: '#19191a'}}>
      <FaBeer />
    </div>
  );
}
