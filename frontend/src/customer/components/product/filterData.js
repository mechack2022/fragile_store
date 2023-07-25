export const color =[
    "white",
    "black","Red"," marun","Being"," Green", "Pink", "Yellow"
]
export const filters =[
    {
        id: "color",
        name: "Color",
        options: [
          { value: "white", label: "White" },
          { value: "beige", label: "Beige"},
          { value: "blue", label: "Blue" },
          { value: "brown", label: "Brown"  },
          { value: "green", label: "Green"  },
          { value: "purple", label: "Purple"  },
          { value:"yellow", label:"Yellow"}
        ],
      },
      {
        id: "size",
        name: "Size",
        options: [
          { value: "S", label: "S"},
          { value: "M", label: "M"},
          { value: "L", label: "L"},
        ],
      },
]
export const singleFilter =[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399", lable: "#159  To #399"},
  {"value": "399-639", "label": "#399 To #639"},
  {"value": "639-879", "label": "#639 To #879"},
  {"value": "1999-2999", "label": "#1999 To #2999"},
  {"value": "3759-3999", "label": "#3759 To #3999"}
        ],
    },
    {
        id:"discount",
        name:"Discount range",
        options: [
            {
              "value": "10",
              "label": "10^ and above"
            },
            {
              "value": "20",
              "label": "20% and Above"
            },
            {
              "value": "30",
              "label": "30% and Above"
            },
            {
              "value": "40",
              "label": "40% and Above"
            },
            {
              "value": "50",
              "label": "50% and Above"
            },
            {
              "value": "60",
              "label": "60% and Above"
            },
            {
              "value": "70",
              "label": "70% and Above"
            },
            {
                "value": "80",
                "label": "80% and Above"
              }
          ]
          
    },
    {
        id: "stock",
        name: "availabilty",
        options:[
            {
                value: "in_stock",label :"In Stock",
            },
            { value:" out of stock", label :"Out of stock"}
        ]
    }

]

export const sortOptions =[
    {name:"Price: Low to high", query: "price_low", current:false},
    {name:"Price: High to Low", query: "price_high", current:false}
];