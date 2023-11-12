'use client';

/* eslint-disable react/jsx-props-no-spreading */

// Using the correct import for `BiSearchAlt` icon
import { BiSearchAlt } from 'react-icons/bi';
// Importing necessary Next.js modules
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const CategoryDropdown = () => {
  const router = useRouter();
  const keyword = ['Sofa', 'Plywood', 'Wardrobe', 'Table', 'Diwaan', 'Dinning tables'];
  const { register, handleSubmit, reset, watch, setValue } = useForm();

  const onSubmit = (data) => {
    router.push(`/services?keyword=${encodeURIComponent(data?.keyword)}`);
    reset();
  };

  const keywordValue = watch('keyword', '');

  return (
    <form className="w-full z-10" onSubmit={handleSubmit(onSubmit)}>
      <div
        className="grid grid-cols-2 md:grid-cols-5 gap-3 place-items-center md:place-items-stretch md:gap-6 w-full bg-[#E5DFCF] py-[15px] md:py-[30px] px-[15px] md:px-[24px]"
        style={{ boxShadow: '6px 9px 12px 0px #00000040' }}
      >
        <div className="bg-white py-[8px] md:py-[12px] px-[18px] col-span-2 w-[97%] md:w-full md:col-span-4 rounded-[10px] flex items-center relative text-black">
          <input
            className="outline-none w-full text-black"
            placeholder="Search for services"
            type="text"
            {...register('keyword', { required: true, maxLength: 20 })}
          />
          <div>
            {keywordValue.length > 0 && (
              <div className="absolute top-full flex flex-col justify-left items-start left-0 w-full h-[150px] md:h-[200px] overflow-y-scroll bg-white rounded-[10px] rounded-tl-none rounded-tr-none py-[10px] shadow-md text-black">
                {keyword.map((item) => (
                  <button
                    type="button"
                    aria-label="keyboard"
                    key={item}
                    className="py-[5px] w-full text-left text-[10px] md:text-[16px] px-[18px] cursor-pointer hover:bg-[#413833] hover:text-white"
                    onClick={() => setValue('keyword', item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="col-span-2 md:col-span-1 text-white p-[8px] md:p-[11px] bg-[#413833] rounded-[10px] flex items-center justify-center gap-1 2xl:gap-3 w-fit md:w-full"
        >
          <BiSearchAlt className="text-xl" /> Submit Now
        </button>
      </div>
    </form>
  );
};

export default CategoryDropdown;
