import React from 'react';
import { X } from 'lucide-react';

const Modal = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
      <div>
        <button><X /></button>
      </div>
    </div>
  );
}

export default Modal;
