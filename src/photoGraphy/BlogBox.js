import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./blogbox.css"; // Import the CSS file for styling
import FavoriteIcon from "@mui/icons-material/Favorite";

const BlogBox = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      setInputValue("");
    }
  };

  return (
    <>
      <div className="blogbox m-20 bg-[#f0f3f6]  " id="blog">
        <div className="b-search justify-between  flex">
          <h1 className="ml-20 pt-5">All Post</h1>
          <div className="b-body">
            <div className="middle">
              <button
                className={`b-bts ${isClicked ? "close" : ""}`}
                onClick={handleClick}
              ></button>
              <input
                className={`input ${isClicked ? "inclicked" : ""}`}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="pro-post bg-white m-20  ">
          <div className="b-post flex  gap-4 relative ">
            <div className="b-image flex-1 ">
              <img
                className="w-full h-full object-cover"
                src="img/block-p1.png"
                alt=""
              />
            </div>
            <div className="b-detail flex-1  h-[90%] text-center  ">
              <AccountCircleIcon className="text-green-500 text-center" />
              <p className="date text-center mt-1">May.19</p>
              <h1 className="the-h text-center mt-2 ">THE HOLIDAY SPECIAL</h1>
              <p className="para text-center tracking-tight text-2xl m-2">
                Cinnamon is a spice obtained from the inner bark of several tree
                species from the genus Cinnamomum. Cinnamon is used mainly as an
                aromatic condiment and flavouring additive in a wide variety of
                cuisines, sweet and savoury dishes, breakfast cereals, snack
                foods, bagels, teas, hot chocolate and traditional foods.
              </p>
              <div className="spann absolute bottom-4 border-t-2  border-red-500  right-2 left-1/2 p-1 flex  first-letter: ">
                <span className="heart cursor-pointer flex-auto ">
                  <FavoriteIcon />
                </span>
                <span className="flex-auto cursor-pointer">2 Comments</span>
                <span className="flex-auto cursor-pointer">5 views</span>
              </div>
            </div>
          </div>
        </div>



        <div className="pro-post bg-white m-20  ">
          <div className="b-post flex  gap-4 relative ">
            <div className="b-image flex-1 ">
              <img
                className="w-full h-full object-cover"
                src="img/block-p2.png"
                alt=""
              />
            </div>
            <div className="b-detail flex-1  h-[90%] text-center  ">
              <AccountCircleIcon className="text-sky-500 text-center" />
              <p className="date text-center mt-1">May.13</p>
              <h1 className="the-h text-center mt-2 ">Simple backdrops for food shots</h1>
              <p className="para text-center tracking-tight text-2xl m-2">
              Rustic wooden table: Capture the warmth and charm of your dishes with a rustic wooden table as a backdrop, adding a touch of natural beauty to your food photography.

              </p>
              <div className="spann absolute bottom-4 border-t-2  border-red-500  right-2 left-1/2 p-1 flex  first-letter: ">
                <span className="heart cursor-pointer flex-auto ">
                  <FavoriteIcon />
                </span>
                <span className="flex-auto cursor-pointer">3 Comments</span>
                <span className="flex-auto cursor-pointer">8 views</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pro-post bg-white m-20  ">
          <div className="b-post flex  gap-4 relative ">
            <div className="b-image flex-1 ">
              <img
                className="w-full h-full object-cover"
                src="img/block-p3.png"
                alt=""
              />
            </div>
            <div className="b-detail flex-1  h-[90%] text-center  ">
              <AccountCircleIcon className="text-gray-500 text-center" />
              <p className="date text-center mt-1">May.05</p>
              <h1 className="the-h text-center mt-2 ">Before the drip</h1>
              <p className="para text-center tracking-tight text-2xl m-2">
              Capture the anticipation and pristine beauty of ice cream by photographing it just before the first luscious drip, showcasing its perfect form and enticing texture.
              </p>
              <div className="spann absolute bottom-4 border-t-2  border-red-500  right-2 left-1/2 p-1 flex  first-letter: ">
                <span className="heart cursor-pointer flex-auto ">
                  <FavoriteIcon />
                </span>
                <span className="flex-auto cursor-pointer">2 Comments</span>
                <span className="flex-auto cursor-pointer">5 views</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pro-post bg-white m-20  ">
          <div className="b-post flex  gap-4 relative ">
            <div className="b-image flex-1 ">
              <img
                className="w-full h-full object-cover"
                src="img/block-p4.png"
                alt=""
              />
            </div>
            <div className="b-detail flex-1  h-[90%] text-center  ">
              <AccountCircleIcon className="text-green-500 text-center" />
              <p className="date text-center mt-1">Apr.23</p>
              <h1 className="the-h text-center mt-2 ">Styling your shots</h1>
              <p className="para text-center tracking-tight text-2xl m-2">
              Choose plates, bowls, or props with smooth finishes to complement the creamy aesthetic and avoid distracting textures.
              Incorporate contrasting elements, such as crunchy toppings or textured backgrounds, to create visual interest and highlight the creamy components of the dish.
              </p>
              <div className="spann absolute bottom-4 border-t-2  border-red-500  right-2 left-1/2 p-1 flex  first-letter: ">
                <span className="heart cursor-pointer flex-auto ">
                  <FavoriteIcon />
                </span>
                <span className="flex-auto cursor-pointer">0 Comments</span>
                <span className="flex-auto cursor-pointer">3 views</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pro-post bg-white m-20  ">
          <div className="b-post flex  gap-4 relative ">
            <div className="b-image flex-1 ">
              <img
                className="w-full h-full object-cover"
                src="img/block-p5.png"
                alt=""
              />
            </div>
            <div className="b-detail flex-1  h-[90%] text-center  ">
              <AccountCircleIcon className="text-red-500 text-center" />
              <p className="date text-center mt-1">Apr.17</p>
              <h1 className="the-h text-center mt-2 ">The perfect sizzle</h1>
              <p className="para text-center tracking-tight text-2xl m-2">
              ensuring that the steam, sear marks, and bubbling textures are prominently showcased, enticing viewers with the delicious anticipation of a flavorful meal.
              Capture the sizzling action and tantalizing appeal of food by photographing it at the peak of its cooking process, when it's hot, juicy, and full of flavor.
              </p>
              <div className="spann absolute bottom-4 border-t-2  border-red-500  right-2 left-1/2 p-1 flex  first-letter: ">
                <span className="heart cursor-pointer flex-auto ">
                  <FavoriteIcon />
                </span>
                <span className="flex-auto cursor-pointer">1 Comments</span>
                <span className="flex-auto cursor-pointer">7 views</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pro-post bg-white m-20  ">
          <div className="b-post flex  gap-4 relative ">
            <div className="b-image flex-1 ">
              <img
                className="w-full h-full object-cover"
                src="img/block-p6.png"
                alt=""
              />
            </div>
            <div className="b-detail flex-1  h-[90%] text-center  ">
              <AccountCircleIcon className="text-orange-500 text-center" />
              <p className="date text-center mt-1">Feb.02</p>
              <h1 className="the-h text-center mt-2 ">Eating with your eyes first</h1>
              <p className="para text-center tracking-tight text-2xl m-2">
              Step into a world of culinary enchantment as visually captivating food photography transports you to a sensorial journey, where each dish is a feast for the eyes, igniting anticipation and inviting you to savor every delectable bite.
              </p>
              <div className="spann absolute bottom-4 border-t-2  border-red-500  right-2 left-1/2 p-1 flex  first-letter: ">
                <span className="heart cursor-pointer flex-auto ">
                  <FavoriteIcon />
                </span>
                <span className="flex-auto cursor-pointer">0 Comments</span>
                <span className="flex-auto cursor-pointer">3 views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBox;
