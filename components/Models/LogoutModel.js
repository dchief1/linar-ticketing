import Link from 'next/link';
import React from 'react';

const LogoutModel = ({ visible, onClose, children }) => {
  if (!visible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  const logout = async () => {
    console.log('success');
    alert('logout');
    // await logoutUser();
    // await dispatch(SET_LOGIN(false));
    // navigate("/login");
  };

  const confirmLogout = (id) => {
    confirmAlert({
      title: 'Delete Product',
      message: 'Are you sure you want to delete this product.',
      buttons: [
        {
          label: 'Delete',
          onClick: () => logout(id),
        },
        {
          label: 'Cancel',
          onClick: () => alert('Click No'),
        },
      ],
    });
  };

  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-25 z-20 
    backdrop-blur-sm flex justify-center items-center"
      id="container"
      onClick={handleClose}
    >
      <div className="w-full max-w-lg   ">
        <div className="bg-white p-8 rounded-md shadow-lg  ">
          {children}
          <div className="flex justify-between px-12 pt-20 items-center">
            <button
              onClick={() => onClose()}
              className="bg-white border py-3 px-12 border-[#ED7C00] rounded-md "
            >
              <span className="text-[#676869]  ">No</span>
            </button>
            <button className="bg-[#ED7C00] rounded-md py-3 px-12 ">
              <span className="text-white">Yes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModel;
