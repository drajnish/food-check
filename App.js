import React from 'react';
import ReactDOM from 'react-dom/client';

import FoodLogo from './logo.png';

const Logo = () => {
  return <img src={FoodLogo} alt="Logo" className="logo" />;
};

const Navbar = () => {
  return (
    <>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
};

const restaurant = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '76688',
      name: 'Guptaji Shakahari Bhojnalay',
      uuid: '5f95a363-e981-4d4a-bea8-6f14c1b48e9b',
      city: '55',
      area: 'Maharana Pratap Nagar',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'jb9iyqwlhuyxyvb6zwnz',
      cuisines: ['North Indian', 'Thalis'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: '24 MINS',
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant:
          'guptaji-shakahari-bhojnalay-maharana-pratap-nagar-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address: 'Zone 2, Near Punjab Sindh Bank, M P Nagar, Bhopal',
      locality: 'Maharana Pratap Nagar',
      parentId: 91882,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '76688',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.6',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '78535',
      name: 'Mahadev Bhojnalay',
      uuid: 'c63c800f-1f22-41b4-a92d-ee6712fbef4f',
      city: '55',
      area: 'MP Nagar',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'u3mgfammbsuwfpkaeeif',
      cuisines: ['North Indian', 'Thalis', 'Combo', 'Biryani'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: '21 MINS',
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: 'mahadev-bhojnalay-maharana-pratap-nagar-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        'Shop No 9, Rathambore Complex, Zone 2, Maharana Pratap Nagar, Bhopal',
      locality: 'Maharana Pratap Nagar',
      parentId: 129506,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '78535',
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.3',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '107521',
      name: 'Mughal Darbar',
      uuid: '952ac85c-e22a-4578-971d-5c1fdfc2b3a1',
      city: '55',
      area: 'Nadra Bus Stand',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'eeeylbrnliju2q8oqykq',
      cuisines: ['Indian', 'North Indian'],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: '33 MINS',
      lastMileTravel: 5,
      slugs: {
        restaurant:
          'mughal-darbar-family-restaurant-old-bhopal-jahangirabad-old-bhopal-jahangirabad',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        'Shop 4, Near Hanumanganj Thana, Cholla Road, Nadra Bus Stand, peer gate, Bhopal',
      locality: 'Old Bhopal Jahangirabad',
      parentId: 8892,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5733053~p=4~eid=00000185-e43c-6b0b-06bb-02dd0083040d',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '107521',
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '3.6',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '253997',
      name: "McDonald's",
      uuid: '497781d2-ae5c-425d-b51a-6cd901889464',
      city: '55',
      area: 'Maharana Pratap Nagar',
      totalRatingsString: '5000+ ratings',
      cloudinaryImageId: 'h0vojuyx9hp2xc4uhhmc',
      cuisines: ['American'],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: '35 MINS',
      lastMileTravel: 1.899999976158142,
      slugs: {
        restaurant: 'mcdonalds-mp-bhopal-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        'MP Bhopal DB Mall,  Shop No. R2, 3rd Floor. D.B City Mall, Opp. M.P. Nagar, Arera Hills, Bhopal- 462011',
      locality: 'MP Bhopal',
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '20% off',
        shortDescriptionList: [
          {
            meta: '20% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '20% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '253997',
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 1.899999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.9',
      totalRatings: 5000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '92511',
      name: 'Manohar Dairy and Restaurant',
      uuid: 'b0083df3-fdd7-4b41-b94a-b26e29e9d5ec',
      city: '55',
      area: 'Maharana Pratap Nagar',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'v6elbsatlbi93xeq0g3c',
      cuisines: [
        'Sweets',
        'Beverages',
        'Desserts',
        'Chaat',
        'Street Food',
        'South Indian',
        'North Indian',
        'Chinese',
        'Bakery',
        'Thalis',
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: '22 MINS',
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant:
          'manohar-dairy-and-restaurant-maharana-pratap-nagar-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address: '132, Zone 1, Maharana Pratap Nagar, Bhopal',
      locality: 'Zone - 1, Mp Nagar',
      parentId: 7052,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '92511',
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.4',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '96842',
      name: 'Vrindavan Dhaba',
      uuid: '3b8540bc-e600-412b-b731-f50a52528dc1',
      city: '55',
      area: 'Hoshangabad Road',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'gybjnl9fhbust5ofngfj',
      cuisines: [
        'North Indian',
        'South Indian',
        'Tandoor',
        'Indian',
        'Beverages',
        'Sweets',
        'Chinese',
        'Salads',
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: '32 MINS',
      lastMileTravel: 6.900000095367432,
      slugs: {
        restaurant: 'vrindavan-dhaba-gulmohar-colony-kolar-road',
        city: 'bhopal',
      },
      cityState: '55',
      address: 'Hoshangabad Road, Near Aashima Mall, Gulmohar Colony, Bhopal',
      locality: 'Gulmohar Colony',
      parentId: 224566,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5733050~p=7~eid=00000185-e43c-6b0b-06bb-02de0083070d',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '6.9 kms',
      hasSurge: false,
      sla: {
        restaurantId: '96842',
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 6.900000095367432,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '3.8',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '84400',
      name: 'Burger King',
      uuid: 'd68275ba-c64a-4724-85dd-68b5fc2dfad3',
      city: '55',
      area: 'Maharana Pratap Nagar',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'yzdmieopbbypvdfybrur',
      cuisines: ['Burgers', 'American'],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: '37 MINS',
      lastMileTravel: 1.899999976158142,
      slugs: {
        restaurant: 'burger-king-db-city-mall-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        'FS 11 & 12 FOOD COURT, THIRD FLOOR DB CITY MALL,OPP. M.P. NAGAR ,ZONE-1 ARERA HILLS,BHOPAL (M.P.) PIN CODE-462011',
      locality: 'DB mall Bhopal',
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: 'Get every item under 129',
        shortDescriptionList: [
          {
            meta: 'Get every item under 129',
            discountType: 'FinalPrice',
            operationType: 'RESTAURANT',
          },
          {
            meta: 'FREE DELIVERY',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'Get every item under 129',
            discountType: 'FinalPrice',
            operationType: 'RESTAURANT',
          },
          {
            meta: 'FREE DELIVERY',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '',
        shortDescriptionList: [
          {
            meta: '',
            discountType: 'FinalPrice',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'Get every item under 129',
            discountType: 'FinalPrice',
            operationType: 'RESTAURANT',
          },
          {
            meta: 'FREE DELIVERY',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '84400',
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 1.899999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.9',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '419988',
      name: '99 rotiwala-bhopal',
      uuid: 'de291a39-acba-49ef-9d87-e7cc5cbf2af2',
      city: '55',
      area: 'M.P. NAGAR',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'brteodziq28wckphkg4f',
      cuisines: ['North Indian', 'Chinese', 'Thalis'],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: '23 MINS',
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: '99-rotiwala-bhopal-mp-nagar-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        '221 ZONE 2 M.P. NAGAR BHOPAL, Bhopal, Bhopal, , Madhya Pradesh, 462011',
      locality: 'Zone - 2 ,Mp Nagar',
      parentId: 233857,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.7 kms',
      hasSurge: false,
      sla: {
        restaurantId: '419988',
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.7',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '79893',
      name: 'Natural Ice Cream',
      uuid: '39f42a6f-198a-4bcf-96d3-fa983db06e4d',
      city: '55',
      area: 'Maharana Pratap Nagar',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'syc7crkqntigbbmplfvb',
      cuisines: ['Ice Cream', 'Desserts'],
      tags: [],
      costForTwo: 15000,
      costForTwoString: '₹150 FOR TWO',
      deliveryTime: 16,
      minDeliveryTime: 16,
      maxDeliveryTime: 16,
      slaString: '16 MINS',
      lastMileTravel: 1.5,
      slugs: {
        restaurant: 'natural-ice-cream-hansa-complex-test-bhopal',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        'Hansa Complex, 190, Service Road, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh- 462011',
      locality: 'Hansa Complex',
      parentId: 2093,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5729296~p=10~eid=00000185-e43c-6b0b-06bb-02df00830a5a',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '79893',
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.6',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '78534',
      name: 'Da Pizzeria',
      uuid: 'af14341e-09a0-4605-9f1e-6e24b1a44ab9',
      city: '55',
      area: 'MP Nagar',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'hufbd0lfid2pub8ushmb',
      cuisines: ['Pizzas', 'Snacks', 'Beverages'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: '31 MINS',
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: 'da-pizzeria-maharana-pratap-nagar-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address: '177, Zone 2, Maharana Pratap Nagar, Bhopal',
      locality: 'Maharana Pratap Nagar',
      parentId: 7067,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '2.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '78534',
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
];

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  area,
}) => {
  return (
    <div className="card">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          cloudinaryImageId
        }
        alt={name}
        className="card-image"
      />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{cuisines.join(', ')}</p>
      </div>
      <div className="card-footer">
        <span className="restaurant-rating">{avgRating}</span>
        <span className="restaurant-address">{area}</span>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {restaurant.map((res) => {
        return <RestaurantCard key={res?.data.id} {...res?.data} />;
      })}
    </div>
  );
};

const Body = () => {
  return <RestaurantList />;
};

const Footer = () => {
  return (
    <div className="footer">
      <img src={FoodLogo} alt="logo" />
      <span>&#169; 2023 Good Food</span>

      <div className="social-media">
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
              alt="facebook"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
              alt="instagram"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
              alt="twitter"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);

export default AppLayout;
