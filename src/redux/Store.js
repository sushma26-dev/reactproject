import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./ProductSlice";

const Store = configureStore({
    reducer: {
        todoArr: todoSlice,
    },
});

export default Store;