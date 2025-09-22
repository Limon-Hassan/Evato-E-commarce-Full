import React, { useState } from 'react';
import Container from '../Container';

const CustomerReviews = ({ product }) => {
  let [toggleShow, settoggleShow] = useState(false);
  let [rating, setRating] = useState(null);
  let handleShow = () => {
    settoggleShow(true);
  };

  let handleRating = e => {
    setRating(e.target.value);
    console.log('User rating:', e.target.value);
  };

  return (
    <>
      <section className="bg-white py-8 antialiased  md:py-16">
        <Container>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-gray-900 ">Reviews</h2>

            <div className="mt-2 flex items-center gap-2 sm:mt-0">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>
              <p className="text-sm font-medium leading-none text-gray-500 ">
                (4.6)
              </p>
              <a
                href="#"
                className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline "
              >
                {' '}
                645 Reviews{' '}
              </a>
            </div>
          </div>

          <div className="my-6 gap-8 sm:flex sm:items-start md:my-8 ">
            <div className="shrink-0 space-y-4 ">
              <p className="text-2xl font-semibold leading-none text-gray-900 ">
                4.65 out of 5
              </p>
              <button
                onClick={handleShow}
                className="mb-2 me-2 text-[16px] font-display font-bold text-white bg-[#629D23] py-[10px] px-[24px] rounded-[6px] cursor-pointer"
              >
                Write a review
              </button>
            </div>

            <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 ">
                  5
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 ">
                  <div className="h-1.5 rounded-full bg-yellow-300"></div>
                </div>
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-black-700 hover:underline text-black-500 sm:w-auto sm:text-left"
                >
                  239 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 ">
                  4
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 ">
                  <div className="h-1.5 rounded-full bg-yellow-300"></div>
                </div>
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-black-700 hover:underline text-black-500 sm:w-auto sm:text-left"
                >
                  432 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 ">
                  3
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 ">
                  <div className="h-1.5 rounded-full bg-yellow-300"></div>
                </div>
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-black-700 hover:underline text-black-500 sm:w-auto sm:text-left"
                >
                  53 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 ">
                  2
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 ">
                  <div className="h-1.5 rounded-full bg-yellow-300"></div>
                </div>
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-black-700 hover:underline text-black-500 sm:w-auto sm:text-left"
                >
                  32 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 ">
                  1
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 ">
                  <div className="h-1.5 rounded-full bg-yellow-300"></div>
                </div>
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-black-700 hover:underline text-black-500 sm:w-auto sm:text-left"
                >
                  13 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 divide-y divide-gray-200">
            <div className="gap-3 pb-6 sm:flex sm:items-start">
              <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                <div className="flex items-center gap-0.5">
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>

                <div className="space-y-0.5">
                  <p className="text-base font-semibold text-gray-900 ">
                    Micheal Gough
                  </p>
                  <p className="text-sm font-normal text-gray-500 ">
                    November 18 2023 at 15:35
                  </p>
                </div>

                <div className="inline-flex items-center gap-1">
                  <p className="text-sm font-medium text-gray-900 ">
                    Verified purchase
                  </p>
                </div>
              </div>

              <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                <p className="text-base font-normal text-gray-500 ">
                  My old IMAC was from 2013. This replacement was well needed.
                  Very fast, and the colour matches my office set up perfectly.
                  The display is out of this world and I’m very happy with this
                  purchase.
                </p>

                <div className="flex items-center gap-4">
                  <p className="text-sm font-medium text-gray-500 ">
                    Was it helpful to you?
                  </p>
                  <div className="flex items-center">
                    <input
                      id="reviews-radio-1"
                      type="radio"
                      value=""
                      name="reviews-radio"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-black  "
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 ">
                      Yes: 3
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="reviews-radio-2"
                      type="radio"
                      value=""
                      name="reviews-radio"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-black "
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 ">
                      No: 0
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-3 py-6 sm:flex sm:items-start">
              <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                <div className="flex items-center gap-0.5"></div>

                <div className="space-y-0.5">
                  <p className="text-base font-semibold text-gray-900 ">
                    Jese Leos
                  </p>
                  <p className="text-sm font-normal text-gray-500 ">
                    November 18 2023 at 15:35
                  </p>
                </div>

                <div className="inline-flex items-center gap-1">
                  <p className="text-sm font-medium text-gray-900 ">
                    Verified purchase
                  </p>
                </div>
              </div>

              <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                <p className="text-base font-normal text-gray-500 ">
                  It’s fancy, amazing keyboard, matching accessories. Super
                  fast, batteries last more than usual, everything runs perfect
                  in this computer. Highly recommend!
                </p>

                <div className="flex gap-2">
                  <img
                    className="h-32 w-20 rounded-lg object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg"
                    alt=""
                  />
                  <img
                    className="h-32 w-20 rounded-lg object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg"
                    alt=""
                  />
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-sm font-medium text-gray-500 ">
                    Was it helpful to you?
                  </p>
                  <div className="flex items-center">
                    <input
                      id="reviews-radio-3"
                      type="radio"
                      value=""
                      name="reviews-radio-2"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-black"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 ">
                      {' '}
                      Yes: 1{' '}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="reviews-radio-4"
                      type="radio"
                      value=""
                      name="reviews-radio-2"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-black"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 ">
                      No: 0
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-3 py-6 sm:flex sm:items-start">
              <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                <div className="flex items-center gap-0.5"></div>

                <div className="space-y-0.5">
                  <p className="text-base font-semibold text-gray-900 ">
                    Bonnie Green
                  </p>
                  <p className="text-sm font-normal text-gray-500 ">
                    November 18 2023 at 15:35
                  </p>
                </div>

                <div className="inline-flex items-center gap-1">
                  <p className="text-sm font-medium text-gray-900 ">
                    Verified purchase
                  </p>
                </div>
              </div>

              <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                <p className="text-base font-normal text-gray-500 ">
                  My old IMAC was from 2013. This replacement was well needed.
                  Very fast, and the colour matches my office set up perfectly.
                  The display is out of this world and I’m very happy with this
                  purchase.
                </p>

                <div className="flex items-center gap-4">
                  <p className="text-sm font-medium text-gray-500 ">
                    Was it helpful to you?
                  </p>
                  <div className="flex items-center">
                    <input
                      id="reviews-radio-5"
                      type="radio"
                      value=""
                      name="reviews-radio-3"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-black"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 ">
                      {' '}
                      Yes: 0{' '}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="reviews-radio-6"
                      type="radio"
                      value=""
                      name="reviews-radio-3"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-black"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 ">
                      No: 0
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              className="mb-2 me-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#629D23] focus:outline-none hover:text-white transition-all ease-in-out duration-300 cursor-pointer"
            >
              View more reviews
            </button>
          </div>
        </Container>
      </section>

      {toggleShow === true ? (
        <div className="w-full h-screen bg-[#000]/30 absolute top-0 left-0 z-20 flex justify-center items-center rounded-2xl">
          <div className="w-[800px] bg-[#fff]  p-[30px] rounded-md">
            <div className="border-b border-[#dee2e6]">
              <div className="flex items-center justify-between mb-[20px]">
                <div className="flex items-center gap-2">
                  <h5 className="text-[20px] font-display font-medium text-[#2C3C28]">
                    Add a review for :
                  </h5>
                  <h4 className="text-[16px] font-display font-medium text-[#6E777D]">
                    ({product})
                  </h4>
                </div>
                <span
                  onClick={() => settoggleShow(false)}
                  className="text-[24px] hover:text-red-500 cursor-pointer ease-in-out duration-300"
                >
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </div>
            </div>
            <div
              onChange={handleRating}
              className="flex  justify-start items-center my-[20px]"
            >
              <>
                <input
                  id="hs-ratings-readonly-1"
                  type="radio"
                  className="peer -ms-5 size-7 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                  name="hs-ratings-readonly"
                  value="1"
                />
                <label
                  htmlFor="hs-ratings-readonly-1"
                  className="peer-checked:text-[#629D23] text-gray-300 pointer-events-none "
                >
                  <svg
                    className="shrink-0 size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </label>

                <input
                  id="hs-ratings-readonly-2"
                  type="radio"
                  className="peer -ms-5 size-7 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                  name="hs-ratings-readonly"
                  value="2"
                />
                <label
                  htmlFor="hs-ratings-readonly-2"
                  className="peer-checked:text-[#629D23] text-gray-300 pointer-events-none "
                >
                  <svg
                    className="shrink-0 size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </label>

                <input
                  id="hs-ratings-readonly-3"
                  type="radio"
                  className="peer -ms-5 size-7 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                  name="hs-ratings-readonly"
                  value="3"
                />
                <label
                  htmlFor="hs-ratings-readonly-3"
                  className="peer-checked:text-[#629D23] text-gray-300 pointer-events-none "
                >
                  <svg
                    className="shrink-0 size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </label>

                <input
                  id="hs-ratings-readonly-4"
                  type="radio"
                  className="peer -ms-5 size-7 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                  name="hs-ratings-readonly"
                  value="4"
                />
                <label
                  htmlFor="hs-ratings-readonly-4"
                  className="peer-checked:text-[#629D23] text-gray-300 pointer-events-none "
                >
                  <svg
                    className="shrink-0 size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </label>

                <input
                  id="hs-ratings-readonly-5"
                  type="radio"
                  className="peer -ms-5 size-7 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                  name="hs-ratings-readonly"
                  value="5"
                />
                <label
                  htmlFor="hs-ratings-readonly-5"
                  className="peer-checked:text-[#629D23] text-gray-300 pointer-events-none"
                >
                  <svg
                    className="shrink-0 size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </label>
              </>
            </div>
            <div>
              <label
                className="text-[16px] font-medium font-display text-[#6E777D]"
                htmlFor="text"
              >
                Review description*
              </label>
              <textarea
                className="w-full h-[200px] text-[16px] font-display font-normal text-[#6E777D] bg-transparent placeholder:text-[16px] placeholder:font-medium p-[15px] my-[15px] rounded-[5px] border-2 border-[#e2e2e2] focus:border-[#629D23] outline-none resize-none"
                type="text"
                name="text"
                placeholder="Make Your Reviews...."
              ></textarea>
            </div>
            <div>
              <label
                className="text-[16px] font-medium font-display text-[#6E777D]"
                htmlFor="text"
              >
                Add real photos of the product to help other customers
                (Optional)
              </label>
              <div class="flex w-full items-center justify-center my-[20px]">
                <label
                  for="dropzone-file"
                  class=" flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
                >
                  <div class="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      class="mb-4 h-8 w-8 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 ">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 ">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-[30px]">
              <button className="text-[16px] font-display font-medium text-[#2C3C28] border border-[#dee2e6] hover:text-white hover:bg-[#629D23] transition-all ease-in-out duration-300 cursor-pointer py-[10px] px-[24px] rounded-[6px]">
                Add Review
              </button>
              <button
                onClick={() => settoggleShow(false)}
                className="text-[16px] font-display font-medium text-[#2C3C28] border border-[#dee2e6] hover:text-white hover:bg-red-400  transition-all ease-in-out duration-300 cursor-pointer py-[10px] px-[24px] rounded-[6px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CustomerReviews;
