import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaDownload,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import resume from "../../assets/ShanmukhaReddy_SoftwareDeveloper.pdf";
import { useModal } from "../ModalContext";

function Socials() {

   const { setIsModalOpen } = useModal();
  return (
    <div className="flex gap-6 text-3xl text-white pt-4">
      <a
        href="https://wa.me/+919390122293"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp
          title="Whatsapp"
          className="hover:text-green-400 transition-transform duration-300"
        />
      </a>
      <a
        href="https://linkedin.com/in/vsr07"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          title="LinkedIn"
          className="hover:text-blue-400 transition-transform duration-300"
        />
      </a>
      <a
        href="https://github.com/shanmu97"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          title="Github"
          className="hover:text-gray-400 transition-transform duration-300"
        />
      </a>
      <a
        href="https://instagram.com/shanmukhareddy.vasa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          title="Instagram"
          className="hover:text-pink-400 transition-transform duration-300"
        />
      </a>

      {/* Email icon to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="hover:text-blue-500 transition-transform duration-300 focus:outline-none"
        aria-label="Open email modal"
      >
        <FaEnvelope title="Email" />
      </button>

      <a href={resume} download target="_blank" rel="noopener noreferrer">
        <FaDownload
          title="Download CV"
          className="hover:text-yellow-300 transition-transform duration-300"
        />
      </a>
    </div>
  );
}

export default Socials;
