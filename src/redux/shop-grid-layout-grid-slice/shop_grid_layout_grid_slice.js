import { createSlice } from "@reduxjs/toolkit";


const initialState =
{
    product: [
        {
            pcode: "111111",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 180,
            price: 150,
            vender: "handicrafts NGO",
            productCat: "Chanderi",
            stock: 5,
            qty: 1,
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag1: "Hot",
            tag2: "Trend",
            tag3: "",

            productLableH: "Hot",
            productLableO: "",

            pImg: "Saree 01/Saree 01 (1).jpg",
            hImg: "Saree 01/Saree 01 (2).jpg",

            imgOne: "Saree 44/Saree 44 (1).jpg",
            imgTwo: "Saree 44/Saree 44 (2).jpg",
            imgThree: "Saree 44/Saree 44 (3).jpg",
            imgFour: "Saree 44/Saree 44 (4).jpg",
            imgFive: "Saree 44/Saree 44 (5).jpg",
            imgSix: "Saree 44/Saree 44 (6).jpg",

            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111112",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 150,
            price: 100,
            vender: "handicrafts NGO",
            productCat: "Chanderi",
            stock: 5,
            qty: 1,
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "",
            productLableO: "-33%",
            pImg: "Saree 02/Saree 02 (1).jpg",
            hImg: "Saree 02/Saree 02 (2).jpg",

            imgOne: "Saree 45/Saree 45 (1).jpg",
            imgTwo: "Saree 45/Saree 45 (2).jpg",
            imgThree: "Saree 45/Saree 45 (3).jpg",
            imgFour: "Saree 45/Saree 45 (4).jpg",
            imgFive: "Saree 45/Saree 45 (5).jpg",
            imgSix: "",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111113",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 150,
            price: 100,
            vender: "handicrafts NGO",
            productCat: "Chanderi",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "",
            productLableO: "",
            pImg: "Saree 03/Saree 03 (1).jpg",
            hImg: "Saree 03/Saree 03 (2).jpg",

            imgOne: "Saree 43/Saree 43 (1).jpg",
            imgTwo: "Saree 43/Saree 43 (2).jpg",
            imgThree: "Saree 43/Saree 43 (3).jpg",
            imgFour: "Saree 43/Saree 43 (4).jpg",
            imgFive: "Saree 43/Saree 43 (5).jpg",
            imgSix: "",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111114",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 70,
            delPrice: 100,
            price: 90,
            vender: "handicrafts NGO",
            productCat: "Chanderi",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "Hot",
            productLableO: "-33%",
            pImg: "Saree 04/Saree 04 (1).jpg",
            hImg: "Saree 04/Saree 04 (2).jpg",


            imgOne: "Saree 42/Saree 42 (1).jpg",
            imgTwo: "Saree 42/Saree 42 (2).jpg",
            imgThree: "Saree 42/Saree 42 (3).jpg",
            imgFour: "Saree 42/Saree 42 (4).jpg",
            imgFive: "Saree 42/Saree 42 (5).jpg",
            imgSix: "",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111115",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 20,
            delPrice: 79,
            price: 50,
            vender: "handicrafts NGO",
            productCat: "Assam",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "Hot",
            productLableO: "-23%",
            pImg: "Saree 05/Saree 05 (1).jpg",
            hImg: "Saree 05/Saree 05 (2).jpg",

            imgTwo: "Saree 42/Saree 42 (2).jpg",
            imgOne: "Saree 42/Saree 42 (1).jpg",
            imgThree: "Saree 42/Saree 42 (3).jpg",
            imgFour: "Saree 42/Saree 42 (4).jpg",
            imgFive: "Saree 42/Saree 42 (5).jpg",
            imgSix: "",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111116",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: "",
            price: 120,
            vender: "handicrafts NGO",
            productCat: "Assam",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "Hot",
            productLableO: "-37%",
            pImg: "Saree 06/Saree 06 (1).jpg",
            hImg: "Saree 06/Saree 06 (2).jpg",

            imgOne: "Saree 41/Saree 41 (1).jpg",
            imgTwo: "Saree 41/Saree 41 (2).jpg",
            imgThree: "Saree 41/Saree 41 (3).jpg",
            imgFour: "Saree 41/Saree 41 (4).jpg",
            imgFive: "Saree 41/Saree 41 (5).jpg",
            imgSix: "Saree 41/Saree 41 (5).jpg",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111117",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: "",
            price: 150,
            vender: "handicrafts NGO",
            productCat: "Tussar",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem..",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Linen",
            tag: "",

            productLableH: "",
            productLableO: "",
            pImg: "Saree 07/Saree 07 (1).jpg",
            hImg: "Saree 07/Saree 07 (2).jpg",

            imgOne: "Saree 40/Saree 40 (1).jpg",
            imgTwo: "Saree 40/Saree 40 (2).jpg",
            imgThree: "Saree 40/Saree 40 (3).jpg",
            imgFour: "Saree 40/Saree 40 (4).jpg",
            imgFive: "Saree 40/Saree 40 (5).jpg",
            imgSix: "Saree 40/Saree 40 (6).jpg",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111118",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 200,
            price: 180,
            vender: "handicrafts NGO",
            productCat: "Tussar",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem..",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Linen",
            tag: "",

            productLableH: "Hot",
            productLableO: "-10%",
            pImg: "Saree 08/Saree 08 (1).jpg",
            hImg: "Saree 08/Saree 08 (2).jpg",

            imgOne: "Saree 39/Saree 39 (1).jpg",
            imgTwo: "Saree 39/Saree 39 (2).jpg",
            imgThree: "Saree 39/Saree 39 (3).jpg",
            imgFour: "Saree 39/Saree 39 (4).jpg",
            imgFive: "Saree 39/Saree 39 (5).jpg",
            imgSix: "Saree 39/Saree 39 (6).jpg",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111119",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 200,
            price: 180,
            vender: "handicrafts NGO",
            productCat: "Kosa",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem..",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Linen",
            tag: "",

            productLableH: "Hot",
            productLableO: "",
            pImg: "Saree 09/Saree 09 (1).jpg",
            hImg: "Saree 09/Saree 09 (2).jpg",

            imgOne: "Saree 37/Saree 37 (1).jpg",
            imgTwo: "Saree 37/Saree 37 (2).jpg",
            imgThree: "Saree 37/Saree 37 (3).jpg",
            imgFour: "Saree 37/Saree 37 (4).jpg",
            imgFive: "Saree 37/Saree 37 (5).jpg",
            imgFive: "Saree 37/Saree 37 (5).jpg",
            // star: "",
            // review: "0 review",          
        },
    ],

    renderProduct: [
        {
            pcode: "111111",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 180,
            price: 150,
            vender: "handicrafts NGO",
            productCat: "Chanderi",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag1: "Hot",
            tag2: "Trend",
            tag3: "",

            productLableH: "Hot",
            productLableO: "",

            pImg: "Saree 01/Saree 01 (1).jpg",
            hImg: "Saree 01/Saree 01 (2).jpg",

            imgOne: "Saree 44/Saree 44 (1).jpg",
            imgTwo: "Saree 44/Saree 44 (2).jpg",
            imgThree: "Saree 44/Saree 44 (3).jpg",
            imgFour: "Saree 44/Saree 44 (4).jpg",
            imgFive: "Saree 44/Saree 44 (5).jpg",
            imgSix: "Saree 44/Saree 44 (6).jpg",

            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111112",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 150,
            price: 100,
            vender: "handicrafts NGO",
            productCat: "Chanderi",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "",
            productLableO: "-33%",
            pImg: "Saree 02/Saree 02 (1).jpg",
            hImg: "Saree 02/Saree 02 (2).jpg",

            imgOne: "Saree 45/Saree 45 (1).jpg",
            imgTwo: "Saree 45/Saree 45 (2).jpg",
            imgThree: "Saree 45/Saree 45 (3).jpg",
            imgFour: "Saree 45/Saree 45 (4).jpg",
            imgFive: "Saree 45/Saree 45 (5).jpg",
            imgSix: "",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111113",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 150,
            price: 100,
            vender: "handicrafts NGO",
            productCat: "Chanderi",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "",
            productLableO: "",
            pImg: "Saree 03/Saree 03 (1).jpg",
            hImg: "Saree 03/Saree 03 (2).jpg",

            imgOne: "Saree 43/Saree 43 (1).jpg",
            imgTwo: "Saree 43/Saree 43 (2).jpg",
            imgThree: "Saree 43/Saree 43 (3).jpg",
            imgFour: "Saree 43/Saree 43 (4).jpg",
            imgFive: "Saree 43/Saree 43 (5).jpg",
            imgSix: "",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111114",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 70,
            delPrice: 100,
            price: 90,
            vender: "handicrafts NGO",
            productCat: "Chanderi",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "Hot",
            productLableO: "-33%",
            pImg: "Saree 04/Saree 04 (1).jpg",
            hImg: "Saree 04/Saree 04 (2).jpg",

            imgTwo: "Saree 42/Saree 42 (2).jpg",
            imgOne: "Saree 42/Saree 42 (1).jpg",
            imgThree: "Saree 42/Saree 42 (3).jpg",
            imgFour: "Saree 42/Saree 42 (4).jpg",
            imgFive: "Saree 42/Saree 42 (5).jpg",
            imgSix: "",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111115",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 20,
            delPrice: 79,
            price: 50,
            vender: "handicrafts NGO",
            productCat: "Assam",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "Hot",
            productLableO: "-23%",
            pImg: "Saree 05/Saree 05 (1).jpg",
            hImg: "Saree 05/Saree 05 (2).jpg",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111116",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: "",
            price: 120,
            vender: "handicrafts NGO",
            productCat: "Assam",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Cotton",
            tag: "",

            productLableH: "Hot",
            productLableO: "-37%",
            pImg: "Saree 06/Saree 06 (1).jpg",
            hImg: "Saree 06/Saree 06 (2).jpg",

            imgOne: "Saree 41/Saree 41 (1).jpg",
            imgTwo: "Saree 41/Saree 41 (2).jpg",
            imgThree: "Saree 41/Saree 41 (3).jpg",
            imgFour: "Saree 41/Saree 41 (4).jpg",
            imgFive: "Saree 41/Saree 41 (5).jpg",
            imgSix: "",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111117",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: "",
            price: 150,
            vender: "handicrafts NGO",
            productCat: "Tussar",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem..",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Linen",
            tag: "",

            productLableH: "",
            productLableO: "",
            pImg: "Saree 07/Saree 07 (1).jpg",
            hImg: "Saree 07/Saree 07 (2).jpg",

            imgOne: "Saree 40/Saree 40 (1).jpg",
            imgTwo: "Saree 40/Saree 40 (2).jpg",
            imgThree: "Saree 40/Saree 40 (3).jpg",
            imgFour: "Saree 40/Saree 40 (4).jpg",
            imgFive: "Saree 40/Saree 40 (5).jpg",
            imgSix: "Saree 40/Saree 40 (5).jpg",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111118",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 200,
            price: 180,
            vender: "handicrafts NGO",
            productCat: "Tussar",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem..",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Linen",
            tag: "",

            productLableH: "Hot",
            productLableO: "-10%",
            pImg: "Saree 08/Saree 08 (1).jpg",
            hImg: "Saree 08/Saree 08 (2).jpg",

            imgOne: "Saree 39/Saree 39 (1).jpg",
            imgTwo: "Saree 39/Saree 39 (2).jpg",
            imgThree: "Saree 39/Saree 39 (3).jpg",
            imgFour: "Saree 39/Saree 39 (4).jpg",
            imgFive: "Saree 39/Saree 39 (5).jpg",
            imgSix: "",
            // star: "",
            // review: "0 review",          
        },
        {
            pcode: "111119",
            pname: "Saree",
            displayName: "Product",

            purcahsePrice: 90,
            delPrice: 200,
            price: 180,
            vender: "handicrafts NGO",
            productCat: "Kosa",
            stock: 5,
            qty: "1",
            pdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…",
            detailDescriptionfirst: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            detailDescriptionsecond: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem..",
            additionalInfotitle: "Color",
            additionalInfo: "Antique, Chestnut, Grullo",
            pmaterial: "Linen",
            tag: "",

            productLableH: "Hot",
            productLableO: "",
            pImg: "Saree 09/Saree 09 (1).jpg",
            hImg: "Saree 09/Saree 09 (2).jpg",

            imgOne: "Saree 37/Saree 37 (1).jpg",
            imgTwo: "Saree 37/Saree 37 (2).jpg",
            imgThree: "Saree 37/Saree 37 (3).jpg",
            imgFour: "Saree 37/Saree 37 (4).jpg",
            imgFive: "Saree 37/Saree 37 (5).jpg",
            imgFive: "Saree 37/Saree 37 (5).jpg",
            // star: "",
            // review: "0 review",          
        },
    ],
}

const shopGridLayoutGridProductSlice = createSlice({
    name: "shop grid product",
    initialState,
    reducers: {
        filterProducts: (state, action) => {
            // console.log(action.payload)
            // console.log(state)
            if(action.payload.selectedCategory==="All"){
                const filteredData = action.payload.mainProducts
                state.renderProduct = filteredData
            }else{
                const filteredData = action.payload.mainProducts.filter((elem) => {
                    return elem.productCat === action.payload.selectedCategory;
                })
                // const filteredData = action.payload.filter((elem) => {
                //     return elem.productCat === action.payload.;                
                // })
                // console.log(filteredData)
                state.renderProduct = filteredData;
            }
        },

        resetFilters: (state) => {
            state.renderProduct = state.product;
        },

        sortByOption: (state, action) => {
            // console.log(action.payload)
            // console.log(state.renderProduct)

            const sortingData = action.payload.product_layout_grid.sort((a, b) => {
                // console.log(a)
                // console.log(b)
                if (action.payload.selectSortingOption === "Lower") {
                    return a.price - b.price;
                } else if (action.payload.selectSortingOption === "Higher") {
                    return b.price - a.price;
                }
            })
            // console.log(sortingData)
            // state.renderProduct = sortingData
        },

        filterByPrice: (state, action) => {
            // console.log(action.payload)

            const filterData = action.payload.mainProducts.filter((elem) => {
                return
            })
        },

        filterMatProducts: (state, action) => {
            // console.log(action.payload)
            // console.log(state)
            const filteredData = action.payload.mainProducts.filter((elem) => {
                return elem.pmaterial === action.payload.selectedMatCategory;
            })
            // console.log(filteredData)
            state.renderProduct = filteredData;

        },

        selectedProdDetails: (state, action) => {
            // console.log(state)
            // console.log(action.payload)
            const filteredData = action.payload.mainProducts.filter((elem) => {
                return elem.pcode === action.payload.selectedItem;
            })
            state.renderProduct = filteredData;
        },





    }
})
export const { filteByPrice, filterProducts, resetFilters, sortByOption, filterMatProducts, selectedProdDetails } = shopGridLayoutGridProductSlice.actions;
export default shopGridLayoutGridProductSlice.reducer