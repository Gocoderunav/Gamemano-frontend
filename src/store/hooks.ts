import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Instead of plain `useDispatch`, use this typed one
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Instead of plain `useSelector`, use this typed one
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
