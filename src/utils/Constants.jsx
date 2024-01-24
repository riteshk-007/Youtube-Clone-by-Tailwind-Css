import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Shorts", icon: <MdLocalFireDepartment />, type: "category" },
  {
    name: "Subscription",
    icon: <CgMusicNote />,
    type: "category",
    divider: true,
  },
  { name: "Your Channel", icon: <FiFilm />, type: "category" },
  { name: "History", icon: <MdLiveTv />, type: "category" },
  { name: "Your Videos", icon: <IoGameControllerSharp />, type: "category" },
  { name: "Watch later", icon: <ImNewspaper />, type: "category" },
  { name: "More", icon: <GiDiamondTrophy />, type: "category", divider: true },
  { name: "Subscription", type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
