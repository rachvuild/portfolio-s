
import React, { useState  } from 'react';
export default function Case({ value }) {
  const [raduiseChoice] = useState(['0.5rem','50%']);
  const randomElement1 = raduiseChoice[Math.floor(Math.random() * raduiseChoice.length)];    
  const randomElement2 = raduiseChoice[Math.floor(Math.random() * raduiseChoice.length)];    
  const randomElement3 = raduiseChoice[Math.floor(Math.random() * raduiseChoice.length)];    
  const randomElement4 = raduiseChoice[Math.floor(Math.random() * raduiseChoice.length)];  
  
 
  return (
    <div className='case' style={{ backgroundColor: value.color }} >
      {value.type === "image" && (
        
        <div className='image' style={{
          borderTopLeftRadius: randomElement1,
          borderTopRightRadius: randomElement2,
          borderBottomRightRadius: randomElement3,
          borderBottomLeftRadius: randomElement4,
          backgroundImage: value.type === "image" ? `url(${value.image})` : 'none',  
      }} />
      )}
      {value.type === "text" &&
        <p>{value.text}</p>
      }
      {value.type === "icon" &&
        <i className={value.iconClass}></i>
      }
      
    </div>
  );
}
