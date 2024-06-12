import 'react-native-get-random-values';
import { v4 } from 'uuid';
import towerImage from "../../assets/images/Tower.jpg";
import saintImage from "../../assets/images/Saint.jpg";
import adduImage from "../../assets/images/Addu.jpg";
import marinaImage from "../../assets/images/Marina.jpg";
import charlesImage from "../../assets/images/Charles.jpg";

export const CITIES = [
    {
      id: v4(),
      city: "Saint Moritz",
      image: saintImage,
      price: "$1200",
      persons: "person",
      location: "Zurich, Switzerland",
      rating: "5.0",
      review: "6",
      author: "Leila Azevedo",
    },
    {
      id: v4(),
      city: "Tower Bridge",
      image: towerImage,
      price: "$890",
      persons: "person",
      location: "London, United Kingdom",
      rating: "5.0",
      review: "3.5",
      author: "David Monaghan",
    },
    {
      id: v4(),
      city: "Addu Atoll",
      image: adduImage,
      price: "$900",
      persons: "person",
      location: "Maldives",
      rating: "5.0",
      review: "1.7",
    },
    {
      id: v4(),
      city: "Marina Bay",
      image: marinaImage,
      price: "$750",
      persons: "person",
      location: "Singapore",
      rating: "5.0",
      review: "2.5",
    },
    {
      id: v4(),
      city: "Charles Bridge",
      image: charlesImage,
      price: "$700",
      persons: "person",
      location: "Prague",
      rating: "5.0",
      review: "2.0",
    },
  ];
