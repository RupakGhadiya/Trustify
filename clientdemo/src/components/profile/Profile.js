import React from 'react'
import { FC, useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel as ReactCarousel } from "react-responsive-carousel";

const Icon = (
  { icon }: { icon: string }
) => (
  <span className='material-symbols-outlined'>{icon}</span>
);

const yabs = ["menu", "lock", "settings"];


const Profile = () => {
  return (
    <div>
      <h1>hii</h1>
    </div>
  )
}

export default Profile