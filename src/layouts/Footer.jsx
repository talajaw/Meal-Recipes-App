// src/layouts/Footer.jsx
const Footer = () => {
  return (
    <footer className="  p-4">
      <div className="flex flex-col items-center justify-between space-y-4 text-gray-500 ">
        <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
          <div className="h-8 group">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-6" />
            </a>
          </div>
          {/* <div className="h-8 group">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_bird_logo_2012.svg" alt="Twitter" className="h-6" />
            </a>
          </div> */}
          {/* <div className="h-8 group">
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Pinterest_icon.svg" alt="Pinterest" className="h-6" />
            </a>
          </div> */}
          <div className="h-8 group">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;