import React from "react";

import "../newsCards/NewsCard.css";

function NewsCard({ image, title, text, url }) {

  return (
<>
  
<div className='new_badge' style={{
          backgroundImage: `url('https://s3.sa-east-1.amazonaws.com/ot242-server/${image}')`,
        }}>
   <a
          href={url ? url : "#!"}
          rel="noopener noreferrer"
        ><div className='text'>{title}</div></a>
</div>


        </>
  
  
  )
}

export default NewsCard