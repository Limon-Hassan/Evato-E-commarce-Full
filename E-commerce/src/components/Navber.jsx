import { useContext, useEffect, useRef, useState } from 'react';
import Container from '../Container';
import { Link, useNavigate } from 'react-router-dom';
import { SocketContext } from '../socket/SocketContext';
import api from '../Api/axios';
const Navber = () => {
  const socket = useContext(SocketContext);
  let [countCart, setCountCart] = useState(0);
  let [search, setSearch] = useState('');
  let [suggestions, setSuggestions] = useState([]);
  let navigate = useNavigate();
  const debounceRef = useRef(null);

  useEffect(() => {
    let updateCart = () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCountCart(cart.length);
    };
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => {
      window.removeEventListener('storage', updateCart);
    };
  }, []);

  useEffect(() => {
    const handler = data => {
      if (
        data.query &&
        data.query.toLowerCase().includes(search.toLowerCase())
      ) {
        setSuggestions(data.suggestions || []);
      }
    };
    socket.on('searchSuggestion', handler);
    return () => socket.off('searchSuggestion', handler);
  }, [socket, search]);

  const handleSearch = e => {
    const value = e.target.value;
    setSearch(value);

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      if (!value.trim()) {
        setSuggestions([]);
        return;
      }
      const userId =
        JSON.parse(localStorage.getItem('auth-Info'))?.user?.id || null;

      socket.emit('searchProducts', { query: value, userId });

      try {
        const res = await api.get('product/product/search', {
          params: { query: value },
        });
        const names = (res.data.products || []).map(p => p.name).slice(0, 8);
        console.log(names);
        setSuggestions(names);
      } catch (err) {
        console.error('Search request failed:', err);
      }
    }, 300);
  };

  useEffect(() => {
    if (!socket) return;

    socket.on('searchResults', data => {
      setSuggestions(data.products.map(p => p.name).slice(0, 8));
    });

    socket.on('searchError', err => {
      console.error('Search error:', err);
    });

    return () => {
      socket.off('searchResults');
      socket.off('searchError');
    };
  }, [socket]);

  const handleSuggestionClick = s => {
    setSearch(s);
    setSuggestions([]);
    navigate(`/shop?query=${encodeURIComponent(s)}`);
    setSearch('');
  };

  const handleShow = async () => {
    let userId = JSON.parse(localStorage.getItem('auth-Info')).user.id;
    if (!search.trim()) return;
    try {
      const response = await api.get('product/product/search', {
        params: { query: search },
      });
      console.log(response);
      // navigate(`/shop?query=${encodeURIComponent(search)}`, {
      //   state: response.data,
      // });
      setSearch('');
      setSuggestions([]);
    } catch (err) {
      console.error(err);
    }
  };

  // const handleProductItem = id => {
  //   navigate(`/productDetails/${id}`);
  //   setSearch('');
  //   setSuggestions([]);
  // };

  return (
    <>
      <nav className="bg-white py-8">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[45px]">
              <Link to="/">
                <img src="logo-01.svg" alt="" />
              </Link>
              <div className="flex">
                <div className="text-2xl px-[16px] py-[8px]  border border-[#e2e2e2] rounded-l-[5px]">
                  <i class="fa-thin fa-location-dot"></i>
                </div>
                <div className=" border border-[#e2e2e2] rounded-r-[5px] px-[16px] py-[8px]">
                  <p className="text-[12px] font-display text-[#74787C]">
                    Your location
                  </p>
                  <a
                    className="text-[14px] font-display text-[#2C3C28] font-semibold"
                    href="#"
                  >
                    Select Location
                  </a>
                </div>
              </div>
              <div class="relative w-[673px] h-[60px]">
                <input
                  onChange={handleSearch}
                  type="search"
                  className="w-full h-full bg-slate-400/20 placeholder:text-slate-400 text-slate-700 placeholder:font-display font-display text-[18px] border border-slate-300 outline-[#629D23] rounded-md pl-3 pr-[115px] py-2 transition duration-300 ease-in-out focus:border-[#629D23]  shadow-sm focus:shadow"
                  placeholder="Search for products, categories or brands"
                />
                {suggestions.length > 0 && (
                  <ul className="absolute left-0 w-full bg-white border rounded shadow mt-1 z-10">
                    {suggestions.map((s, i) => (
                      <li
                        key={i}
                        className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleSuggestionClick(s)}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  onClick={handleShow}
                  className="absolute right-1 top-[50%] rounded font-display font-bold bg-[#629D23] py-[8px] px-[24px] border border-transparent text-center text-[16px] text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none hover:bg-slate-700 ease-in-out duration-300 cursor-pointer  disabled:opacity-50 disabled:shadow-none translate-y-[-50%] "
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Link
                to="/account"
                className="text-[18px] font-display font-medium border border-[#e2e2e2] rounded-[6px] bg-white hover:bg-[#2C3C28] transition-all ease-in-out duration-300 py-[12px] px-[28px] text-black hover:text-white  cursor-pointer"
              >
                <span className="mr-[8px]">
                  <i class="fa-light fa-user"></i>
                </span>
                Account
              </Link>
              <button className="text-[18px] font-display font-medium border border-[#e2e2e2] rounded-[6px] bg-white hover:bg-[#2C3C28] transition-all ease-in-out duration-300 py-[12px] px-[28px] text-black hover:text-white  cursor-pointer">
                <span className="mr-[8px]">
                  <i class="fa-light fa-heart"></i>
                </span>
                Wishlist
              </button>
              <Link
                to="/Cart"
                className="relative text-[18px] font-display font-medium border border-[#e2e2e2] rounded-[6px] bg-white hover:bg-[#2C3C28] transition-all ease-in-out duration-300 py-[12px] px-[28px] text-black hover:text-white  cursor-pointer"
              >
                <span className="mr-[8px]">
                  <i class="fa-light fa-cart-shopping"></i>
                </span>
                Cart
                <span className="absolute top-[4px] right-[62px] bg-[#629D23] text-white rounded-full w-[24px] flex justify-center items-center h-[24px] text-sm ">
                  {countCart}
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navber;
