import { PageDashboard } from "app/pages/dashboard/Dashboard"
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<PageDashboard />} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
}