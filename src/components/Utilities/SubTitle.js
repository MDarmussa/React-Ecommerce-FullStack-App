import React from 'react'
// import { Link } from 'react-router-dom'
// <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>

function SubTitle({ title, btntitle }) {
  return (
     <div className="d-flex justify-content-between pt-4">
            <div className="sub-tile">{title}</div>
            {btntitle ? (
                
                    <div className="shopping-now">{btntitle}</div>
                
            ) : null}
     </div>
  )
}

export default SubTitle