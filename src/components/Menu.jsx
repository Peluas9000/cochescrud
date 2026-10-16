import React, { Component } from 'react'



export default class Menu extends Component {
  render() {
    return (
  <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <span className="text-xl font-bold text-blue-700">HMS</span>
        </div>

        <div className="hidden sm:block sm:ml-6">
          <ul className="flex space-x-4 text-gray-700 font-medium items-center">
            <li><a href="/" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm">Home</a></li>
            <li><a href="/our-story" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm">Our Story</a></li>
       

            <li className="relative group">
              <button className="hover:text-blue-600 px-3 py-2 rounded-md text-sm flex items-center">
                More Info
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>

              <ul
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Insurance Partners</a>
                </li>
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Patient Guidelines</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Testimonials</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">FAQs</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <a href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">Book Now</a>

          <div className="sm:hidden">
            <button id="mobile-menu-button" type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    
    <div className="sm:hidden hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a href="#" className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium">Home</a>
        <a href="#" className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium">Our
          Story</a>
        <a href="#" className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium">Departments</a>
        <a href="#"
          className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium">Health
          Packages</a>
        <a href="#" className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium">Doctors</a>
        <a href="#" className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium">Careers</a>


        <div className="relative">
          <button
            className="w-full text-left px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium flex items-center justify-between mobile-dropdown-trigger">
            More Info
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <div className="hidden pl-4 py-2 mobile-dropdown-content">
            <a href="#" className="block py-1 hover:text-blue-600">Insurance Partners</a>
            <a href="#" className="block py-1 hover:text-blue-600">Patient Guidelines</a>
            <a href="#" className="block py-1 hover:text-blue-600">Testimonials</a>
            <a href="#" className="block py-1 hover:text-blue-600">FAQs</a>
          </div>
        </div>

        <a href="#"
          className="block px-3 py-2 text-blue-600 font-semibold rounded-md text-base font-medium">Book Now</a>
      </div>
    </div>
  </nav>

    )
  }
}
