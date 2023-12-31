import { useAppSelector, useAppDispatch } from "../redux/hook";
import { increment } from "../redux/slices/counterSlice";

import { useGetSampleDataQuery } from "../redux/services/sampleApi";

function Home() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetSampleDataQuery();

  if (isLoading || error) {
    return;
  }

  return (
    <div className="h-[90vh] flex flex-col gap-5 justify-center items-center">
      <div className="flex ">
        <img src={data?.photo?.url} className="w-[250px] rounded-lg" />
      </div>
      <button
        className="border border-blue-400 px-3 py-1 rounded-lg"
        onClick={() => dispatch(increment())}
      >
        count is {count}
      </button>
    </div>
  );
}

export default Home;
