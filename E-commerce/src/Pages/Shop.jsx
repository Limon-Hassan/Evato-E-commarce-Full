import { useEffect, useRef, useState } from 'react';
import Container from '../Container';
import Pegination from './Pegination';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../Api/axios';
import SkeletonProduct from '../components/SkeletonProduct';

const Shop = () => {
  let [minPrice, SetminPrice] = useState(0);
  let [maxPrice, SetmaxPrice] = useState(500);
  const [sortOrder, setSortOrder] = useState('');
  let [CurrentPrice, SetCurrentPrice] = useState(maxPrice);
  let [filteredRange, setFilteredRange] = useState(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  let location = useLocation();
  let navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';
  let [shopProducts, setShopProducts] = useState([]);
  let [searchedProducts, setSearchedProducts] = useState(location.state || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  let handleRangeChange = e => {
    SetCurrentPrice(Number(e.target.value));
    SetmaxPrice(Number(e.target.value));
  };

  let handleFilter = () => {
    setFilteredRange({ min: minPrice, max: maxPrice });
  };

  useEffect(() => {
    setLoading(true);
    if (location.state) {
      setSearchedProducts(location.state);
      setLoading(false);
      return;
    }

    if (query) {
      api
        .get('product/product/search', { params: { query } })
        .then(response => setSearchedProducts(response.data || []))
        .catch(err => console.error('Search fetch error:', err))
        .finally(() => setLoading(false));
      return;
    }
    api
      .get('product/GetProducts')
      .then(response => setShopProducts(response.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [location.state, query]);

  useEffect(() => {
    setLoading(true);

    if (query) {
      const params = {
        query,
        minPrice,
        maxPrice,
        sort: sortOrder,
        page: currentPage,
        limit: 20,
      };
      api
        .get('product/product/search', { params })
        .then(res => {
          setSearchedProducts(res.data || []);
          setTotalPages(res.data.totalPages || 1);
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false));

      return;
    }
  }, [query, minPrice, maxPrice, sortOrder, currentPage]);

  let handleProductItem = async id => {
    try {
      let response = await api.get('product/GetProducts', {
        params: { id: id },
      });

      window.location.href = `/productDetails/${id}/${response.data.product.name.replace(
        /\s+/g,
        '-'
      )}`;
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <>
      <section>
        <Container>
          <div className="flex justify-between mt-[60px] z-0" ref={menuRef}>
            <div className="w-[320px]">
              <div className="mb-[20px] border border-[#e2e2e2] rounded-[8px]">
                <h5 className="text-[20px] font-display font-bold text-[#2C3C28] border-b border-[#e2e2e2] py-[30px] pl-[30px] pr-[20px]">
                  Widget Price Filter
                </h5>
                <div className="flex justify-between gap-3 px-[20px] pt-[30px] pb-[15px]">
                  <div className="flex-1">
                    <label className="block text-sm text-[#6E777D] mb-1">
                      Min price
                    </label>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={e => SetminPrice(Number(e.target.value))}
                      className="w-full border border-[#e2e2e2] rounded-[4px] px-[15px] py-1.5 outline-none font-medium text-[#2C3C28]"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm text-[#6E777D] mb-1">
                      Max price
                    </label>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={e => SetmaxPrice(Number(e.target.value))}
                      className="w-full border border-[#e2e2e2] rounded-[4px] px-[15px] py-1.5 outline-none font-medium text-[#2C3C28]"
                    />
                  </div>
                </div>
                <div className="px-[20px] mb-[30px]">
                  <input
                    type="range"
                    min={0}
                    max={128}
                    value={CurrentPrice}
                    onChange={handleRangeChange}
                    className="w-full h-2 bg-[#629D23] rounded-lg appearance-none cursor-pointer accent-[#629D23]"
                  />
                  <div className="flex justify-between items-center">
                    <p className="mt-3 text-[18px] font-display font-normal text-[#6E777D]">
                      Price: ${minPrice} — ${maxPrice}
                    </p>

                    <button
                      onClick={handleFilter}
                      className="mt-3 bg-[#629D23] hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-[20px] border border-[#e2e2e2] rounded-[8px]">
                <h5 className="text-[20px] font-display font-bold text-[#2C3C28] border-b border-[#e2e2e2] py-[30px] pl-[30px] pr-[20px]">
                  Product Categories
                </h5>
                <div className="p-[20px]">
                  <ul>
                    <li className="list-disc text-[14px] font-display font-medium text-[#2C3C28] leading-[17px] ml-[25px] mb-[13px]">
                      <a href="#">Potato</a>
                    </li>
                    <li className="list-disc text-[14px] font-display font-medium text-[#2C3C28] leading-[17px] ml-[25px] mb-[13px]">
                      <a href="#">Potato</a>
                    </li>
                    <li className="list-disc text-[14px] font-display font-medium text-[#2C3C28] leading-[17px] ml-[25px] mb-[13px]">
                      <a href="#">Potato</a>
                    </li>
                    <li className="list-disc text-[14px] font-display font-medium text-[#2C3C28] leading-[17px] ml-[25px] mb-[13px]">
                      <a href="#">Potato</a>
                    </li>
                    <li className="list-disc text-[14px] font-display font-medium text-[#2C3C28] leading-[17px] ml-[25px] ">
                      <a href="#">Potato</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-[1300px]">
              {query && (
                <div className="flex justify-between items-center bg-[#F3F4F6] rounded-[6px] p-[15px] relative">
                  <h4>Showing {searchedProducts?.count} results</h4>

                  <button
                    onClick={() => setOpen(prev => !prev)}
                    className="text-[16px] font-display font-semibold text-[#FFF] bg-[#629D23] py-[8px] px-[14px] cursor-pointer rounded-[4px] "
                  >
                    Sort
                    <span className="ml-1.5 ">
                      <i class="fa-solid fa-chevron-down"></i>
                    </span>
                  </button>
                  {open && (
                    <div className="absolute top-0 right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                      <ul className="py-2 text-sm text-gray-700">
                        <li
                          className="px-4 py-2 hover:bg-[#629D23] hover:text-[#FFF] cursor-pointer transition-all ease-in-out duration-300"
                          onClick={() => {
                            setSortOrder('lowToHigh');
                            setOpen(false);
                          }}
                        >
                          Low to High
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-[#629D23] hover:text-[#FFF] cursor-pointer transition-all ease-in-out duration-300"
                          onClick={() => {
                            setSortOrder('highToLow');
                            setOpen(false);
                          }}
                        >
                          High To Low
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className=" flex flex-wrap  content-start  items-end gap-[12px] mt-[20px] mb-[40px]">
                {loading && (
                  <div className="flex flex-wrap gap-[24px] transition-opacity duration-500 opacity-100">
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <SkeletonProduct key={idx} />
                    ))}
                  </div>
                )}

                {!loading &&
                  (query
                    ? searchedProducts.products?.map((pro, index) => (
                        <div
                          key={index}
                          onClick={() => handleProductItem(pro._id)}
                          className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] "
                        >
                          <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                            <img
                              className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                              src={pro.photo}
                              alt="jpg"
                            />
                            <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                              <div className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,  0_63%)]">
                                25% <br></br>Off
                              </div>
                            </div>
                          </div>
                          <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                            {pro.name}
                          </h4>
                          <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                            {pro.stock} Pack
                          </p>
                          <div className="flex items-center gap-1.5 mt-1">
                            <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                              ${pro.price}
                            </h3>
                            <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                              $36.00
                            </h3>
                          </div>
                          <div className="flex items-center justify-between ">
                            <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                              <div className="mr-[12px]">
                                <h5 className="text-[14px] font-display font-bold">
                                  1
                                </h5>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                                  <i class="fa-solid fa-plus-large"></i>
                                </button>
                                <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                                  <i class="fa-solid fa-minus"></i>
                                </button>
                              </div>
                            </div>
                            <div>
                              <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                                ADD
                                <span>
                                  <i class="fa-light fa-cart-shopping"></i>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    : shopProducts?.map((product, indx) => (
                        <div
                          key={indx}
                          onClick={() => handleProductItem(product._id)}
                          className=" cursor-pointer p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] "
                        >
                          <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                            <img
                              className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                              src={product.photo}
                              alt="jpg"
                            />
                            <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                              <div
                                className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                               [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                              >
                                25% <br></br>Off
                              </div>
                            </div>
                          </div>
                          <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                            {product.name}
                          </h4>
                          <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                            {product.stock} Pack
                          </p>
                          <div className="flex items-center gap-1.5 mt-1">
                            <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                              ${product.price}
                            </h3>
                            <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                              $36.00
                            </h3>
                          </div>
                          <div className="flex items-center justify-between ">
                            <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                              <div className="mr-[12px]">
                                <h5 className="text-[14px] font-display font-bold">
                                  1
                                </h5>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                                  <i class="fa-solid fa-plus-large"></i>
                                </button>
                                <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                                  <i class="fa-solid fa-minus"></i>
                                </button>
                              </div>
                            </div>
                            <div>
                              <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                                ADD
                                <span>
                                  <i class="fa-light fa-cart-shopping"></i>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-[60px]">
            <Pegination
              active={currentPage}
              setActive={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Shop;
