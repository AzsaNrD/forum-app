import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsPencilSquare } from 'react-icons/bs';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import { asyncLeaderboards } from '../states/leaderboards/action';
import { asyncSetCategory, asyncClearCategory } from '../states/categoriesThread/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
} from '../states/threads/action';
import removeDuplicate from '../utils/removeDuplicate';
import ThreadsList from '../components/ThreadsList';
import Categories from '../components/Categories';

function HomePage() {
  const {
    threads = [],
    users = [],
    categoriesThread,
    leaderboards = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
    dispatch(asyncLeaderboards());
  }, [dispatch]);

  const onUpVote = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVote = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralVote = (id) => {
    dispatch(asyncNeutralizeVoteThread(id));
  };

  const onSetCategory = (categories, category) => {
    dispatch(asyncSetCategory(categories, category));
  };

  const onClearCategory = (categories) => {
    dispatch(asyncClearCategory(categories));
  };

  if (threads === null || leaderboards === null) {
    return null;
  }

  const threadList = threads.map((thread) => ({
    ...thread,
    ownerId: users.find((user) => user.id === thread.ownerId),
    authUser,
  }));

  const threadFilter = threadList.filter((thread) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    thread.category.includes(categoriesThread?.selectedCategory || ''));

  const categoryThread = threads.map((thread) => thread.category);

  const categories = removeDuplicate(categoryThread);

  const categoriesList = {
    value: categories,
    selectedCategory: null,
  };

  return (
    <section className="mt-32 mb-12 flex content-center gap-10 transition-all duration-150">
      <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 px-5 xl:px-0">
        <div className="flex flex-col gap-5 w-full xl:w-80">
          <div className="bg-gray-50 shadow-sm rounded-xl border-dashed border-gray-500 border xl:border-none p-10">
            <h3 className="font-semibold text-slate-600 xl:text-center text-xl tracking-wide">
              KATEGORI POPULER
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              <Categories
                categoriesList={categoriesList}
                setCategory={onSetCategory}
                clearCategory={onClearCategory}
              />
            </div>
          </div>

          <div className="bg-gray-50 shadow-sm rounded-xl p-10 hidden xl:block">
            <h3 className="font-semibold text-slate-600 xl:text-center text-xl tracking-wide">
              PENGGUNA AKTIF
            </h3>
            <div className="mt-8 space-y-3">
              {leaderboards.slice(0, 5).map((leaderboard) => (
                <div key={leaderboard.user.id} className="flex gap-2 items-center">
                  <img
                    className="w-5 h-5 rounded-full"
                    src={leaderboard.user.avatar}
                    alt={leaderboard.user.name}
                  />
                  <p className="text-gray-500">{leaderboard.user.name}</p>
                </div>
              ))}
              <div>
                <a className="text-gray-600 hover:underline" href="/leaderboards">
                  Selengkapnya...
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[750px]">
          <ThreadsList
            threads={threadFilter}
            upVote={onUpVote}
            downVote={onDownVote}
            neutralVote={onNeutralVote}
          />
        </div>
      </div>
      {authUser && (
        <div className="fixed bottom-7 right-[3%] xl:right-[5%]">
          <button
            className="text-2xl bg-gray-50 flex items-center p-3 rounded-full shadow-md transition-all duration-150 hover:shadow-lg border"
            type="button"
            onClick={() => navigate('/new')}
            title="Buat Diskusi Baru"
          >
            <BsPencilSquare />
          </button>
        </div>
      )}
    </section>
  );
}

export default HomePage;
