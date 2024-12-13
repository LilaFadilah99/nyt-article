import React from "react";

interface ArticleProps {
  title: string;
  author: string;
  date: string;
  url: string;
  image: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ title, author, date, url, image }) => (
  <div className="md:mt-2">
    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline mt-2 block">
      <div className="relative w-full h-56 md:h-64 rounded-md overflow-hidden">
        <img
          src={
            image ||
            "https://img.freepik.com/free-photo/attractive-brunette-asian-woman-holds-disposable-cup-coffee-points-aside-shows-blank-space-advertises-place-promotion-dressed-casual-clothes-suggests-visit-cafe-grab-some-drink_273609-45118.jpg?t=st=1734067802~exp=1734071402~hmac=e957a7e45b3d5756f804df97aa0ef185efa20433e726f73d840605f855e549b9&w=1800"
          }
          alt="article_image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-4 text-gray-600 text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{author}</p>
    </a>
    <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
  </div>
);

export default ArticleCard;
