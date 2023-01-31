import CategoryContext from "../context/CategoryProvider";
import { useContext } from "react";

function useCategory() {
  return useContext(CategoryContext);
}

export default useCategory