import React from "react";

export default function List({data, handleEdit, handleDelete}) {
  return (
    <div className="list-group">
        {
            data.map((contact)=> {
                return(
                    <div className="list-group-item list-group-item-action bg-dark">
        <div className="d-flex w-100 justify-content-between bg-dark">
          <h5 className="mb-1 bg-dark">{contact.name}</h5>
          <div>
            <button onClick={() => handleEdit(contact.id)} className="lft vert btn btn-sm btn-success">Edit</button>
            
            <button onClick={() => handleDelete(contact.id)} className="btn vert btn-sm btn-danger">Delete</button>
          </div>
        </div>
        <h5 className="mb-1 bg-dark">{contact.telp}</h5>
      </div>
                );
            })}

      
    </div>
  );
}