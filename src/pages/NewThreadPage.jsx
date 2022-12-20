import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

function NewThreadPage() {
  const { authUser } = useSelector((states) => states);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section className="m-auto w-full sm:w-8/12 lg:w-6/12 transition-all duration-150">
      {authUser ? (
        <div className="bg-gray-50 mt-32 mb-16 m-auto p-10 rounded-xl shadow">
          <div className="">
            <h3 className="font-semibold text-center text-xl text-neutral-700">Buat Diskusi Baru</h3>
          </div>
          <div>
            <ThreadInput addThread={onAddThread} />
          </div>
        </div>
      ) : (
        <div className="text-neutral-600 italic">
          <h3 className="text-xl font-bold flex gap-2">
            KAMU HARUS
            <a className="text-emerald-500 hover:underline" href="/login">MASUK</a>
            TERLEBIH DAHULU
          </h3>
        </div>
      )}
    </section>
  );
}

export default NewThreadPage;
