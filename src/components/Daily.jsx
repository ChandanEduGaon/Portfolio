import React from 'react'

const Daily = () => {
  return (
      <div className="grid grid-cols-4 gap-1">
          <div className="col-span-1">Id</div>
          <div className="col-span-1">Name</div>
          <div className="col-span-2">Description</div>
          <div className="col-span-1">Date</div>
          <div className="col-span-1">Action</div>
    </div>
  )
}

export default Daily