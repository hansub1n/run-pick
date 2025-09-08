'use client';
import { useModalStore } from '@/stores/useModalStore';
import React, { useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

type ModalProps = {
  children: React.ReactNode;
  id: string;
};
const Modal = ({ children, id }: ModalProps) => {
  const { activeModal, close } = useModalStore();

  useEffect(() => {
    // TODO: 데스크탑에서 모달 오픈했을 시 스크롤바 너비 생각해야 됨
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [activeModal]);

  return (
    <>
      {activeModal === id && (
        <>
          <div
            onClick={close}
            className='z-10 fixed inset-0 bg-black/50'
          />
          <section className='z-20 absolute top-1/4 left-1/2 transform -translate-x-1/2 fixed w-[313px] pt-[10px] pb-[20px] px-[10px] bg-white rounded-[10px]'>
            <div className=' w-[full] h-[30px] flex justify-end items-center'>
              <IoCloseOutline
                onClick={close}
                className='cursor-pointer w-[25px] h-[25px]'
              />
            </div>
            {children}
          </section>
        </>
      )}
    </>
  );
};

export default Modal;
