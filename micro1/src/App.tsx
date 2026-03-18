import { Route, Routes } from "react-router";

import DetailPage from "./pages/DetailPage";
import DetailViewPage from "./pages/DetailViewPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <Routes>
      <Route path="list" element={<ListPage />} />
      <Route path="detail" element={<DetailPage />} />
      <Route path="detail/:id" element={<DetailViewPage />} />
    </Routes>
  );
}

export default App;
