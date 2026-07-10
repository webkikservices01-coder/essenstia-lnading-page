export const SITE = "https://essentia.in";
export const EE = "https://essentiaenvironments.com";
export const EH = "https://essentiahome.com";

export const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      "name": "essentia group",
      "legalName": "essentia group",
      "url": SITE,
      "logo": {
        "@type": "ImageObject",
        "@id": `${SITE}/#logo`,
        "url": `${SITE}/logo.png`,
        "caption": "essentia group"
      },
      "sameAs": [
        "https://essentiaenvironments.com",
        "https://essentiahome.com"
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "Hardesh Chawla"
        },
        {
          "@type": "Person",
          "name": "Monica Chawla"
        }
      ],
      "foundingDate": "1999",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
      },
      "subOrganization": [
        { "@id": `${EE}/#organization` },
        { "@id": `${EH}/#organization` }
      ]
    },
    {
      "@type": "Organization",
      "@id": `${EE}/#organization`,
      "name": "essentia environments",
      "url": EE,
      "parentOrganization": { "@id": `${SITE}/#organization` },
      "description":
        "full service design and build firm specialising in turnkey residential and commercial projects."
    },
    {
      "@type": "Organization",
      "@id": `${EH}/#organization`,
      "name": "essentia home",
      "url": EH,
      "parentOrganization": { "@id": `${SITE}/#organization` },
      "description":
        "furniture and design-led living destination with in-house manufactured collections."
    }
  ]
};


export const founders = [
  {
    id: "hardesh-chawla",
    name: "hardesh chawla",
    role: "director",
    bio: "founder of essentia, hardesh chawla has played a defining role in shaping the company's integrated design-to-build model since 1999. with a background in financial services and an mba from insead, he brought a structured, systems-led approach to an industry that was traditionally fragmented. he oversees the build, execution, and operational side of the business.",
    linkedin: "LINKEDIN_URL_HARDESH",
    instagram: "INSTAGRAM_URL_HARDESH"
  },
  {
    id: "monica-chawla",
    name: "monica chawla",
    role: "creative head",
    bio: "as the creative head of essentia, monica chawla leads the brand's creative vision across interiors, furniture, and styling. her approach is rooted in spatial balance, material sensitivity, and an intuitive understanding of how people experience spaces. over the years, she has shaped a distinct design language that blends global influences with a strong understanding of indian living.",
    linkedin: "LINKEDIN_URL_MONICA",
    instagram: "INSTAGRAM_URL_MONICA"
  },
  {
    id: "hridik-chawla",
    name: "hridik chawla",
    role: "co-founder, essentia home",
    bio: "hridik chawla leads the next generation of essentia, bringing a contemporary perspective to the brand's evolving design and retail landscape. closely involved in product development, brand positioning, and expansion, he has played a key role in shaping essentia home into a destination for furniture and design-led living.",
    linkedin: "LINKEDIN_URL_HRIDIK",
    instagram: "INSTAGRAM_URL_HRIDIK"
  }
];

