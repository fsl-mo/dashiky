import { v4 as uuid } from 'uuid';

export const SHOP_DATA = [
  {
    id: 1,
    title: "Ladies' Watches",
    routeName: 'womens-watches',
    imageUrl: 'https://i.ibb.co/R0kNpQV/womens-watches.jpg',
    items: [
      {
        id: uuid(),
        name: 'Versace Vanity - White',
        imageUrl: 'https://i.ibb.co/qsC7LD1/versace-vanity-white.png',
        price: 8119,
        type: 'watch',
        gender: 'women',
        brand: 'Versace Watches',
        stock: 2,
        description:
          'Luxury Swiss Quartz RONDA 762.3 Watch. Stainless Steel Case. Calfskin leather strap with Medusa studs. Water Resistance 30 M.',
      },
      {
        id: uuid(),
        name: 'Frédérique Constant Classics Lady Carrée 23x21mm',
        imageUrl:
          'https://i.ibb.co/zftznHr/frederique-constant-classics-lady-carree-23x21mm-quartz-silver-leather-strap-FC-200-MC16.png',
        price: 679,
        type: 'watch',
        gender: 'women',
        brand: 'Frédérique Constant',
        stock: 23,
        description:
          'Frederique Constant Luxury Swiss Made Classic Watch With Leather strap Bracelet. Water Resistance 30 M /3ATM. Sapphire Crystal, Anti-Reflective Coating Glass.',
      },
      {
        id: uuid(),
        name: 'Longines La Grande Classique 29mm',
        imageUrl:
          'https://i.ibb.co/v3JZXyv/Longines-La-Grande-Classique-29mm.jpg',
        price: 2499,
        type: 'watch',
        gender: 'women',
        brand: 'Longines',
        stock: 5,
        description:
          'Longines La Grande Classique 29mm, 12 Diamonds on  Mother of pearl dial,Full rose gold Pvd case and bracelet. Les Grandes Classiques de Longines embodies the oldest aesthetic tradition of the brand.  Stainless Steel Case ',
      },
      {
        id: uuid(),
        name: 'Longines - Dolce Vita Silver "finqué" with Roman  17,7 x 27 mm',
        imageUrl:
          'https://i.ibb.co/7R4c2NP/longines-dolce-vita-silver-finque-roman-steel-leather-strap-womens-watch-177-x-27-mm-L52584715.png',
        price: 1250,
        type: 'watch',
        gender: 'women',
        brand: 'Longines',
        stock: 8,
        description:
          'Classic Swiss Quartz Watch With Leather strap Bracelet. Water Resistance 30 M /3ATM. Sapphire Crystal, Stainless Steel Case. Size/Diameter 17,7 X 27 Mm. ',
      },
      {
        id: uuid(),
        name: "Versace Palazzo Empire Yellow Gold Lady's 39mm",
        imageUrl:
          'https://i.ibb.co/8D5vv1M/versace-palazzo-empire-yellow-gold-ladys-39mm-vco100017.png',
        price: 1479,
        type: 'watch',
        gender: 'women',
        brand: 'Versace Watches',
        stock: 4,
        description:
          "Lady's watch with big Madusa on the dial, yellow gold plated, case with Greca pattern and enamel. Elegant Swiss Quartz Watch Stainless Steel / Yellow Gold Plated Watch. Sapphire Crystal, Anti-Reflective Coating, Stainless Steel Bracelet With Gold PVD Treatment. Water Resistance 50 M / 5 ATM.",
      },
      {
        id: uuid(),
        name: " Tissot - Everytime Gold PVD Lady's Watch",
        imageUrl:
          'https://i.ibb.co/F3ZBHbM/tissot-everytime-gold-pvd-lady-s-watch.png',
        price: 2219,
        type: 'watch',
        gender: 'women',
        brand: 'Tissot',
        stock: 11,
        description:
          'A classical, timeless design, the sleek and clean face of the Tissot Everytime singles it out as a very modern watch. Stainless Steel With Black PVD Treatment Case. Sapphire Crystal, Anti-Reflective Coating Glass. Water Resistance 30 M / 3 ATM.',
      },
    ],
  },
  {
    id: 2,
    title: "Men's Watches",
    routeName: 'mens-watches',
    imageUrl: 'https://i.ibb.co/4K2H0rq/mens-watches.jpg',
    items: [
      {
        id: uuid(),
        name: "Longines - HydroConquest 39mm Quartz Black & Steel Gent's Watch",
        imageUrl:
          'https://i.ibb.co/kSW8YSS/longines-hydroconquest-39mm-quartz-black-steel-gent-s-watch-L37304566.png',
        price: 1300,
        type: 'watch',
        gender: 'men',
        brand: 'Longines',
        stock: 6,
        description:
          'Longines - HydroConquest 39mm, Quartz movement, Black dial and bezel,  Steel case and bracelet. Water Resistance 300 M / 30 ATM.  Size / Diameter 39 Mm.',
      },
      {
        id: uuid(),
        name: 'Rado - HyperChrome Black & Leather Quartz Chronograph',
        imageUrl:
          'https://i.ibb.co/StffyYS/rado-hyperchrome-black-leather-quartz-chronograph-r32259156.png',
        price: 1755,
        type: 'watch',
        gender: 'men',
        brand: 'Rado',
        stock: 3,
        description:
          'Dynamic, sleek and sporty, the HyperChrome Automatic Chronograph is designed to look just as good with a business suit as it does with a casual outfit or even sports gear. Water Resistance 100 M / 10 ATM.  Size / Diameter 45 Mm.',
      },
      {
        id: uuid(),
        name: 'Raymond Weil - Maestro Moon Phase Blue & Leather strap',
        imageUrl:
          'https://i.ibb.co/NYtKbVc/raymond-weil-maestro-moon-phase-blue-leather-strap-2239-stc-00509.png',
        price: 1489,
        type: 'watch',
        gender: 'men',
        brand: 'Raymond Weil',
        stock: 7,
        description:
          "Raymond Weil Maestro Moon Phase Blue Leather strap, 40mm  stainless steel, blue dial, Roman numerals, gent's watch, 2239-STC-00509. Water Resistance 50 M / 5 ATM.",
      },
      {
        id: uuid(),
        name: 'Tissot Chrono XL Black PVD & Leather strap',
        imageUrl:
          'https://i.ibb.co/zhmt3Yd/tissot-chrono-xl-black-pvd-leather-strap-t1166173605700.png',
        price: 340,
        type: 'watch',
        gender: 'men',
        brand: 'Tissot',
        stock: 4,
        description:
          'The Tissot Chrono XL is one of the largest chronographs (45mm) in the Tissot collection. The Tissot Chrono XL Classic is a great watch for those looking for a sporty and elegant chronograph, with Swiss technology at an unbeatable price. Water Resistance 100 M / 10 ATM.',
      },
      {
        id: uuid(),
        name: 'Sjöö Sandström - Royal Steel Classic Anniversary Edition',
        imageUrl:
          'https://i.ibb.co/LQJ4r6p/sjoeoe-sandstroem-royal-steel-classic-anniversary-edition-limited-100-pcs-009284.png',
        price: 2100,
        type: 'watch',
        gender: 'men',
        brand: 'Sjöö Sandström',
        stock: 2,
        description:
          'Offering a timeless expression with a Swedish twist of elegance, Royal Steel Classic constitutes the very essence and foundation of Sjöö Sandström. The Automatic S1 was the first watch the brand made and the first wristwatch ever to be designed and manufactured in Sweden, premiering in 1993 with a white dial and black bracelet. Size / Diameter 41 Mm Water Resistance 100 M / 10 ATM.',
      },
      {
        id: uuid(),
        name: ' Carl F. Bucherer Adamavi 39mm Automatic Rose gold Two Tones',
        imageUrl:
          'https://i.ibb.co/bJzvFZS/carl-f-bucherer-adamavi-39mm-automatic-rose-gold-two-tones-0010314071521.png',
        price: 4400,
        type: 'watch',
        gender: 'men',
        brand: ' Carl F. Bucherer',
        stock: 10,
        description:
          'Carl F. Bucherer Adamavi 39mm Automatic, case and brecelet in Rose gold and steel, silver dial  - 00.10314.07.15.21. Sapphire Crystal, Anti-Reflective Coating Glass. Stainless Steel Bracelet With Gold PVD Treatment Bracelet. Size / Diameter 39 Mm Water Resistance 30 M / 3 ATM.',
      },
    ],
  },

  {
    id: 3,
    title: 'Sunglasses',
    routeName: 'sunglasses',
    imageUrl: 'https://i.ibb.co/NWkBgXJ/sunglasses.jpg',
    items: [
      {
        id: uuid(),
        name: 'Gucci - GG0382S Sunglasses',
        imageUrl: 'https://i.ibb.co/T1mpM99/Gucci-GG0382-S-Sunglasses.png',
        price: 385,
        type: 'sunglasses',
        gender: 'men',
        brand: 'Gucci',
        stock: 70,
        description:
          'Gucci GG0382S is a Full Rim frame for Men, which is made of Acetate. This model features a Square shape, with a Single Bridge. These Sunglasses work well for people whose style is: Stylish Designer.',
      },
      {
        id: uuid(),
        name: 'Ray-Ban - RB3025 Aviator Pink Lens',
        imageUrl:
          'https://i.ibb.co/GHKxSMJ/Ray-Ban-RB3025-Large-Metal-Aviator.png',
        price: 269,
        type: 'sunglasses',
        gender: 'unisex',
        brand: 'Ray-Ban',
        stock: 100,
        description:
          'Ray-Ban Aviator sunglasses are retro and timeless. Classic Pilot style, 100% UV protection worn by , Bradley Cooper in The Hangover, Hugh Jackman in Real Steel and many more. ',
      },
      {
        id: uuid(),
        name: 'Versace VE2181',
        imageUrl: 'https://i.ibb.co/DzqXyb7/Versace-VE2181.png',
        price: 249,
        type: 'sunglasses',
        gender: 'men',
        brand: 'Dolce & Gabbana',
        stock: 40,
        description:
          'Versace VE2181 sunglasses for men are sure to enliven any look with classic art deco influenced styling and an Aviator-inspired shape. A luxury fashion icon for almost 40 years, Versace sunglasses continue to set the trends with sophisticated designs.',
      },
      {
        id: uuid(),
        name: 'Dolce & Gabbana DG2155',
        imageUrl: 'https://i.ibb.co/Nt7kQkW/Dolce-Gabbana-DG2155.png',
        price: 279,
        type: 'sunglasses',
        gender: 'women',
        brand: 'Dolce & Gabbana',
        stock: 99,
        description:
          'Dolce & Gabbana DG2155 sunglasses for women offer a sophisticated re-imagining of the timeless round silhouette that adds elegance to any ensemble. Discover the color choice that elevates your look with the Dolce & Gabbana logo on each temple.',
      },
      {
        id: uuid(),
        name: 'Ray-Ban RB2176 - Folding Clubmaster',
        imageUrl:
          'https://i.ibb.co/F50m7nH/Ray-Ban-RB2176-Folding-Clubmaster-Sunglasses.png',
        price: 189,
        type: 'sunglasses',
        gender: 'unisex',
        brand: 'Ray-Ban',
        stock: 100,
        description:
          "Ray-Ban RB2176 Folding Clubmaster sunglasses will put the timeless, retro style you crave neatly in your pocket. They're cool AND convenient For Men and Women (Unisex)",
      },
      {
        id: uuid(),
        name: 'Smith Roam - Sunglasses',
        imageUrl: 'https://i.ibb.co/YW4M0zw/Smith-Roam-Sunglasses.png',
        price: 355,
        type: 'sunglasses',
        gender: 'unisex',
        brand: 'Smith Roam',
        stock: 89,
        description:
          'Smith Optics sunglasses are created to outfit those people whose lifestyle and success rely on clear vision and thorough protection from the sun and the elements. Smith Optics sunglasses are characterized by sharp detailing, 100% UV protection.',
      },
      {
        id: uuid(),
        name: 'Dolce & Gabbana DG2166',
        imageUrl: 'https://i.ibb.co/R4SdQzz/Dolce-Gabbana-DG2166.png',
        price: 349,
        type: 'sunglasses',
        gender: 'men',
        brand: 'Dolce & Gabbana',
        stock: 65,
        description:
          'Dolce & Gabbana DG2166 sunglasses offer a modern twist on the timeless Aviator silhouette to elevate any ensemble. These full rim frames, crafted in high-strength metal deliver exceptional durability.',
      },
      {
        id: uuid(),
        name: 'Carolina Herrera SHE795',
        imageUrl: 'https://i.ibb.co/qjwvpB7/Carolina-Herrera-SHE795.png',
        price: 379,
        type: 'sunglasses',
        gender: 'women',
        brand: 'Carolina Herrera ',
        stock: 10,
        description:
          "Carolina Herrera's fashions have been renowned world wide for their cutting edge styles and feminine approach to high fashion. This model features a Rounded Edges shape, with a Single Bridge.",
      },
      {
        id: uuid(),
        name: 'Persol PO3199S',
        imageUrl: 'https://i.ibb.co/Ptyw9xZ/Persol-PO3199-S.png',
        price: 299,
        type: 'sunglasses',
        gender: 'Unisex',
        brand: 'Persol',
        stock: 60,
        description:
          'Persol sunglasses are among the most well respected and distinguished eyewear brands in the world. Each attractive and comfortable sunglass frame is expertly hand-crafted in Lauriano, Italy. Persol PO3199S is a Full Rim frame for Men and Women, which is made of Acetate.',
      },
      {
        id: uuid(),
        name: 'Ray-Ban - RB3025 Aviator Green Lens',
        imageUrl: 'https://i.ibb.co/PQSKfkM/Ray-Ban-RB3025-Aviator.png',
        price: 269,
        type: 'sunglasses',
        gender: 'unisex',
        brand: 'Ray-Ban',
        stock: 89,
        description:
          'Ray-Ban Aviator sunglasses are retro and timeless. Classic Pilot style, 100% UV protection worn by , Bradley Cooper in The Hangover, Hugh Jackman in Real Steel and many more. ',
      },
    ],
  },
];
