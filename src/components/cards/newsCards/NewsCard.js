import React from "react";

import "../newsCards/NewsCard.css";

function NewsCard({ image, title, text, url }) {

  return (
<>
  
<div className='new_badge' style={{
          backgroundImage: `url('images/Novedades/${image}')`,
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