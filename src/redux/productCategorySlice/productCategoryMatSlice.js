import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        mat:"Cotton",
        matProdCount:""
    },
    {
        mat:"Linen",
        matProdCount:""
    },     
]


const productCategoryMatSlice = createSlice({
name: "Category Material",
initialState,
reducers : {
    processProductMatCategories: (state, action) => {
        // console.log(action.payload);

        const materialcat = action.payload.prodMatCat.map((matcategory, key) => matcategory = matcategory.mat)
        // console.log(materialcat)
        // console.log(action.payload)
        
        materialcat.map((matcat,key) => {            
                const matcatCount = action.payload.mainProducts.filter(item => item.pmaterial === matcat).length;
                // console.log(catCount);
                state[key].matProdCount = matcatCount;
        });
    }
}
})

export const{processProductMatCategories}=productCategoryMatSlice.actions
export default productCategoryMatSlice.reducer
