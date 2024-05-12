import React, { useState, useEffect } from 'react';

export default function Navigation() {
  useEffect(() => {
    const handleBurgerClick = () => {
      const menus = document.querySelectorAll('.navbar-menu');
      menus.forEach((menu) => {
        menu.classList.toggle('hidden');
      });
    };

    const handleMenuClose = () => {
      const menus = document.querySelectorAll('.navbar-menu');
      menus.forEach((menu) => {
        menu.classList.toggle('hidden');
      });
    };

    const burgerButtons = document.querySelectorAll('.navbar-burger');
    burgerButtons.forEach((button) => {
      button.addEventListener('click', handleBurgerClick);
    });

    const closeButtons = document.querySelectorAll('.navbar-close');
    closeButtons.forEach((button) => {
      button.addEventListener('click', handleMenuClose);
    });

    const backdropButtons = document.querySelectorAll('.navbar-backdrop');
    backdropButtons.forEach((button) => {
      button.addEventListener('click', handleMenuClose);
    });

    return () => {
      burgerButtons.forEach((button) => {
        button.removeEventListener('click', handleBurgerClick);
      });
      closeButtons.forEach((button) => {
        button.removeEventListener('click', handleMenuClose);
      });
      backdropButtons.forEach((button) => {
        button.removeEventListener('click', handleMenuClose);
      });
    };
  }, []);

  return (
    <>
      <body class="bg-blue-500">
        <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
          <a class="text-4xl capitalize font-bold leading-none" href="#">
            SPACED
          </a>
          <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-black p-3">
              <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a class="text-sm text-gray-400 hover:text-gray-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="text-sm text-blue-600 font-bold" href="#">
                About Us
              </a>
            </li>
            <li>
              <a class="text-sm text-gray-400 hover:text-gray-500" href="#">
                Services
              </a>
            </li>
            <li>
              <a class="text-sm text-gray-400 hover:text-gray-500" href="#">
                Timeline
              </a>
            </li>
          </ul>

          <a class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">
            Book Now
          </a>
        </nav>
        <div class="navbar-menu relative z-50 hidden">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
              <a class="mr-auto text-3xl font-bold leading-none" href="#">
                SPACED
              </a>
              <button class="navbar-close">
                <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">
                    Home
                  </a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">
                    About Us
                  </a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">
                    Services
                  </a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">
                    Pricing
                  </a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-auto">
              <div class="pt-6">
                <a class="block px-4 py-3 mb-2  text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">
                 Book Now
                </a>
              </div>
              <p class="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      </body>

      <script>// Burger menus</script>
    </>
  );
}
