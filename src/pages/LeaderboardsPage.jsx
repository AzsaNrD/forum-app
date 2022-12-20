import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrophyFill } from 'react-icons/bs';
import { asyncLeaderboards } from '../states/leaderboards/action';

function LeaderboardsPage() {
  const { leaderboards = [], authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLeaderboards());
  }, [dispatch]);

  if (leaderboards === null) {
    return null;
  }

  return (
    <section className="mt-32 mb-16 w-full sm:w-11/12 lg:w-9/12 xl:w-7/12 p-9 sm:px-16 sm:py-10 bg-gray-50 shadow transition-all duration-150 rounded-xl h-full">
      <div className="flex gap-3 items-center text-gray-600">
        <BsTrophyFill />
        <h3 className="font-semibold text-xl ">LEADERBOARDS PENGGUNA</h3>
      </div>
      <div className="mb-5 mt-10 flex flex-col gap-5">
        {leaderboards.map((leaderboard) => (
          <div
            key={`${leaderboard.user.id}-${leaderboard.user.name}`}
            className="flex justify-between items-center text-gray-600 bg-gray-100 cursor-pointer shadow shadow-black/10 hover:shadow-md transition-all duration-150 p-5 rounded-xl"
          >
            <div className="flex gap-2 items-center">
              <img
                src={leaderboard.user.avatar}
                alt={leaderboard.user.name}
                className="w-10 h-10 rounded-full"
              />
              {authUser?.id === leaderboard.user.id ? (
                <p>{`${leaderboard.user.name} (Anda)`}</p>
              ) : (
                <p>{leaderboard.user.name}</p>
              )}
            </div>
            <div>
              <p>
                {leaderboard.score}
                {' '}
                Points
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LeaderboardsPage;
