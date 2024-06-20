import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
         
        category: "All",
        prodCount: ""
    },
    {
        img:"categChanderi.jpg", 
        category: "Chanderi",
        prodCount: "9"
    },
    {
        img:"categAssam.jpg",
        category: "Assam",
        prodCount: "4"
    },
    {
        img:"categVenkatagiri.jpg",
        category: "Tussar",
        prodCount: "3"
    },
    {
        img:"categLinen.jpg",
        category: "Kosa",
        prodCount: "2",
    },
]


const productCategorySlice = createSlice({
name: "Category",
initialState,
reducers : {
    processProductCategories: (state, action) => {
        // console.log(action.payload);

        const cat = action.payload.prodCat.map((category, key) => category = category.category)
        // console.log(cat)
        // console.log(action.payload)


        cat.map((category,key) => {
            if(category==="All"){
                const catCount = [action.payload.mainProducts.filter(item => item.productCat).length];
                // console.log(catCount);
                state[key].prodCount = catCount;
            }else{
                const catCount = action.payload.mainProducts.filter(item => item.productCat === category).length;
                // console.log(catCount);
                state[key].prodCount = catCount;
            }
            // return count;
        });
        

    }

}
})


export default productCategorySlice.reducer
export const{processProductCategories}=productCategorySlice.actions