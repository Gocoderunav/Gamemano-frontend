


import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFilteredProducts = createAsyncThunk(
  "filters/fetchProducts",
  async (categorySlug: string | null) => {
    const url = categorySlug
      ? `https://dummyjson.com/products/category/${categorySlug}`
      : `https://dummyjson.com/products`;
    const res = await axios.get(url);
    return res.data.products;
  }
);

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    products: [] as any[],
    filteredProducts: [] as any[],
    loading: false,
    error: null as string | null,
    selectedCategory: null as string | null,
    selectedRating: null as number | null,
    priceRange: { min: null as number | null, max: null as number | null }
  },
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload;
    },
    setSelectedRating(state, action: PayloadAction<number | null>) {
      state.selectedRating = action.payload;
    },
    setPriceRange(state, action: PayloadAction<{ min: number | null; max: number | null }>) {
      state.priceRange = action.payload;
    },
    sortByPrice(state, action: PayloadAction<string>) {
      const order = action.payload;
      state.filteredProducts.sort((a, b) =>
        order === "Price : Low to High"
          ? a.price - b.price
          : order === "Price : High to Low"
          ? b.price - a.price
          : 0
      );
    },
    applyFilters(state) {
      let result = [...state.products];

      if (state.selectedRating !== null) {
        result = result.filter((p) => Math.floor(p.rating) >= state.selectedRating!);
      }

      if (state.priceRange.min !== null && state.priceRange.max !== null) {
        const min = state.priceRange.min;
        const max = state.priceRange.max;
        result = result.filter((p) => p.price >= min && p.price <= max);
      }

      state.filteredProducts = result;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching products";
      });
  }
});

export const {
  setSelectedCategory,
  setSelectedRating,
  setPriceRange,
  sortByPrice,
  applyFilters
} = filterSlice.actions;

export default filterSlice.reducer;
