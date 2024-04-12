'use client';

import { BiSearchAlt } from 'react-icons/bi';
// Importing necessary Next.js modules
import { useRouter } from 'next/navigation'; // Correct import statement
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { TbSofaOff } from 'react-icons/tb';

const CategoryDropdown = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const keywordValue = watch('keyword', '');

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/provider');
        const data = await res.json();
        setProviders(data?.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProviders();
  }, []);

  useEffect(() => {
    setFilteredProviders(
      keywordValue?.length >= 3
        ? providers?.filter((provider) => provider?.nameOftheFirm.toLowerCase().includes(keywordValue.toLowerCase()))
        : [],
    );
  }, [keywordValue, providers]);

  const handleSelect = (selectedKeyword) => {
    setValue('keyword', selectedKeyword);
    setFilteredProviders([]);
    router.push(`/services?keyword=${encodeURIComponent(selectedKeyword)}`);
  };

  const onSubmit = (data) => {
    handleSelect(data?.keyword);
    reset();
  };

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
            {...register('keyword', { required: true, maxLength: 40 })}
          />
          <div>
            {loading ? (
              <BallTriangle height={50} width={50} color="green" ariaLabel="loading" visible />
            ) : filteredProviders?.length > 0 ? (
              <div className="absolute left-0 top-full w-full bg-white rounded-[10px] shadow-md text-black mt-1 z-100 overflow-y-scroll max-h-[20vh]">
                {filteredProviders?.map((provider) => (
                  <button
                    type="button"
                    key={provider.id}
                    className="py-[8px] text-[14px] px-[18px] w-full text-left cursor-pointer hover:bg-[#413833] hover:text-white"
                    onClick={() => handleSelect(provider.nameOftheFirm)}
                  >
                    {provider.nameOftheFirm}
                  </button>
                ))}
              </div>
            ) : (
              <TbSofaOff className="text-sm text-secondary" />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn col-span-2 md:col-span-1 text-white p-[8px] md:p-[11px] bg-[#413833] rounded-[10px] flex items-center justify-center gap-1 2xl:gap-3 w-fit md:w-full hover:bg-secondary"
        >
          <BiSearchAlt className="text-xl" /> Submit Now
        </button>
      </div>
    </form>
  );
};

export default CategoryDropdown;
