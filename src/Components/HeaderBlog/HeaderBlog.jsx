import React from 'react'
import './headerBlog.css'
import {dataHome} from './../../data/dataHome'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import img from '../../img/aboutImg/aboutHiderImg.jpg'

const HeaderBlog = () => {
  return (
    <div className="blog">
      <div className="header_about">
        <div className="about_text">
          <span>About Us</span>
          <h1>About Us - Who We Are?</h1>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="buildingsBlock">
        {dataHome.map((item, index) => (
          <div key={index} className="blog_box">
            <div className="img">
              <img src={item.img} />
            </div>
            <div className="text">
              <div className="rent_or_sale">
                <span
                  style={
                    item.rentOrSale === "For Rent"
                      ? {
                          background: "rgba(255, 152, 0, 0.1)",
                          color: "rgb(255, 152, 0)",
                        }
                      : {
                          background: "rgba(37, 181, 121, 0.1)",
                          color: "rgb(37, 181, 121)",
                        }
                  }
                >
                  {item.rentOrSale}
                </span>
                <FavoriteIcon style={{ color: "#bec7d8" }} />
              </div>
              <h4>{item.name}</h4>
              <div>
                <span>
                  <LocationOnIcon
                    style={{ color: "#72809d", fontSize: "14px" }}
                  />
                </span>
                <p>{item.location}</p>
              </div>
            </div>
            <div className="btn_block">
              <button>{item.price}</button>
              <span>{item.buildsName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderBlog
