import Logo from "../../assets/logo-text.png";
import { FaGithub,FaTwitter,FaLinkedin,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <img src={Logo} alt="Dev Stack" className="h-10 w-auto mb-4"  />

            <p className="text-sm text-gray-500 leading-5 max-w-sm">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

           
            <div className="flex items-center gap-5 mt-6">

              <a href="#" className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900">
                <FaGithub />
                GitHub
              </a>

              <a href="#" className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900">
                <FaTwitter />
                Twitter
              </a>

              <a href="#" className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900">
                <FaLinkedin />
                LinkedIn
              </a>

            </div>
          </div>

         
          <div>
            <h3 className="text-xs font-bold text-gray-800 uppercase mb-4">
              Product
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-xs text-gray-500 hover:text-gray-800">  Home </a>
              </li>

              <li>
                <a  href="#"  className="text-xs text-gray-500 hover:text-gray-800">  Technologies</a>
              </li>

              <li>
                <a href="#"  className="text-xs text-gray-500 hover:text-gray-800">  Projects</a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-xs font-bold text-gray-800 uppercase mb-4">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-xs text-gray-500 hover:text-gray-800">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="text-xs text-gray-500 hover:text-gray-800"  >
                  Contact
                </a>
              </li>

              <li>
                <a  href="#"  className="text-xs text-gray-500 hover:text-gray-800">
                  Careers
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-xs font-bold text-gray-800 uppercase mb-4">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-gray-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-gray-400 hover:text-gray-700"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;