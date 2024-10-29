// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'menu' },
  { href: '/', name: 'team' },
  { href: '/', name: 'testimonials' },
  { href: '/', name: 'book a table' },
  { href: '/', name: 'contact' },
];

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Bistro Cafe',
  subtitle:
    'Welcome to our exclusive restaurant, where quality cuisine meets friendly service. We are proud to serve delicious dishes that will pamper your taste buds and create an unforgettable culinary experience',
  btnText: 'Find out more',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'We are committed to serving the highest quality food with fresh and local ingredients. Our chefs have experience in combining delicious flavors with beautiful presentations.',
  btnText: 'find out more',
  image: AboutImg,
};

export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Chocolate Cake',
      price: 'Rp 25k',
      description: 'The perfect cake must look great, feel fantastic, and test delicious.',
    },
    {
      image: MenuImg2,
      name: 'Quen Burger',
      price: 'Rp 30k',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg3,
      name: 'Special Burger',
      price: 'Rp 35k',
      description: 'Our Burger King is equipped with a special burger sauce',
    },
    {
      image: MenuImg4,
      name: 'Burger Beef',
      price: 'Rp 30k',
      description: 'Fresh, high-quality beef, prepared with special spices',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Chef Sara Peter has worked in several leading restaurants around the world, which helped him gain valuable experience in a variety of international cuisines. He is a flavor explorer who is always looking for new inspiration to create unique and delicious dishes.',
  sub2: 'Chef Sara Peter has worked in several leading restaurants around the world, which helped gain valuable experience in a variety of international cuisines. He is a flavor explorer who is always looking for new inspiration to create unique and delicious dishes.',
  name: 'sara peter',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'We hope Sara Perter will come back to our restaurant and give us the opportunity to celebrate more extraordinary culinary experiences together. Thanks for visiting, Rick Thompson and we hope to welcome you again soon!”',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'We would also like to thank John Doe for his positive feedback about our services. Your honesty and support means a lot to us, and we always strive to maintain the highest standards in our service.',
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Henry A. is always a pleasant guest. His visits always improve the atmosphere of the restaurant."',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: '3784 patterson road, #8 new york, CA 69000',
    phone: '(201)256-3689',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
