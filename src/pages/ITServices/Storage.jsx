import React from 'react';
import { Database, HardDrive, Save } from 'lucide-react';

const Storage = () => {

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/7Gf69TkDxGzZPDGHpU4cN7-1200-80-f3f578e.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:415"
            alt="Cloud Storage Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 pt-20">CLOUD BOXS</h1>
          <p className="mb-8 text-2xl">
          We provide innovative and comprehensive IT solutions for businesses. From software development to network maintenance, we've got you covered.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 space-y-16">
        {/* Object Storage Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/pixelcut-export%20(3).png/:/cr=t:2.31%25,l:0%25,w:100%25,h:95.39%25/rs=w:600,h:300,cg:true"
              alt="Object Storage"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">OBJECT STORAGES</h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              SetupBoxs Object Storage, known as EOS, is an SSD-based S3-compatible service designed for demanding workloads like machine learning and deep learning.
            </p>
          </div>
        </div>

        {/* Block Storage Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-last md:order-first">
            <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center pr-10">BLOCK STORAGES</h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              SetupBoxs Volumes provide block-level storage volumes for use with our compute nodes. These volumes can be attached to your computing nodes, making their data and file system available. If your node is running on Linux, you can mount this volume's file system just like any other.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/pixelcut-export%20(2)-43e6ec1.png/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
              alt="Block Storage"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Saved Images Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-10">
          <div className="w-full md:w-1/2">
            <img
              src="http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/pixelcut-export%20(1)-09477c9.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:600,h:300,cg:true"
              alt="Saved Images"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">SAVED IMAGES</h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Saved images can be utilized to create new nodes with varying plans and configurations. These images are also essential for setting up scale groups to configure auto-scaling for your applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
