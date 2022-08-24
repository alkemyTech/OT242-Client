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
        ><div className='text'>Ver novedad</div></a>
</div>
<h5 className="epig_card">{title}</h5>

        </>
  
  
  )
}

export default NewsCard